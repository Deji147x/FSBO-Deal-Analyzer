import { Processor, WorkerHost, InjectQueue } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job, Queue } from 'bullmq';
import { PrismaService } from '../prisma/prisma.service';
import { MessagingService } from './messaging.service';

@Processor('workflow-queue')
export class WorkflowEngineService extends WorkerHost {
    private readonly logger = new Logger(WorkflowEngineService.name);

    constructor(
        private prisma: PrismaService,
        private messaging: MessagingService,
        @InjectQueue('workflow-queue') private workflowQueue: Queue,
    ) {
        super();
    }

    async process(job: Job<any, any, string>): Promise<any> {
        const { executionId, stepId } = job.data;
        this.logger.log(`Processing execution ${executionId}, step ${stepId}`);

        // Update step result to RUNNING
        const stepResult = await this.prisma.automationStepResult.create({
            data: {
                executionId,
                stepId,
                status: 'RUNNING',
            },
        });

        try {
            const step = await this.prisma.automationStep.findUnique({
                where: { id: stepId },
            });

            if (!step) throw new Error('Step not found');

            const execution = await this.prisma.automationExecution.findUnique({
                where: { id: executionId },
                include: { lead: true },
            });

            if (!execution) throw new Error('Execution not found');

            if (!execution.lead) throw new Error('Lead not found for execution');

            let result: any = {};

            switch (step.stepType) {
                case 'SEND_EMAIL':
                    if (!execution.lead.email) throw new Error('Lead has no email address');
                    result = await this.messaging.sendEmail(
                        execution.lead.email,
                        (step.config as any).subject,
                        (step.config as any).body,
                    );
                    break;
                case 'SEND_SMS':
                    if (!execution.lead.phone) throw new Error('Lead has no phone number');
                    result = await this.messaging.sendSms(
                        execution.lead.phone,
                        (step.config as any).body,
                    );
                    break;
                case 'WAIT':
                    // Delay is handled by BullMQ's delay property when adding the NEXT job
                    break;
                default:
                    throw new Error(`Unsupported step type: ${step.stepType}`);
            }

            // Update step result to COMPLETED
            await this.prisma.automationStepResult.update({
                where: { id: stepResult.id },
                data: {
                    status: result.success === false ? 'FAILED' : 'COMPLETED',
                    output: result.data || result,
                    error: result.error,
                    completedAt: new Date(),
                },
            });

            if (result.success === false) {
                throw new Error(result.error);
            }

            // Trigger next step
            await this.triggerNextStep(executionId, step.order + 1);

        } catch (error) {
            this.logger.error(`Failed to process step ${stepId} for execution ${executionId}`, error);

            await this.prisma.automationStepResult.update({
                where: { id: stepResult.id },
                data: {
                    status: 'FAILED',
                    error: error.message,
                    completedAt: new Date(),
                },
            });

            await this.prisma.automationExecution.update({
                where: { id: executionId },
                data: { status: 'FAILED' },
            });
        }
    }

    private async triggerNextStep(executionId: string, nextOrder: number) {
        const execution = await this.prisma.automationExecution.findUnique({
            where: { id: executionId },
            include: { workflow: { include: { steps: true } } },
        });

        if (!execution) {
            this.logger.error(`Execution ${executionId} not found when triggering next step`);
            return;
        }

        const nextStep = execution.workflow.steps.find((s: any) => s.order === nextOrder);

        if (!nextStep) {
            // Workflow finished
            await this.prisma.automationExecution.update({
                where: { id: executionId },
                data: { status: 'COMPLETED', completedAt: new Date() },
            });
            return;
        }

        const delay = nextStep.stepType === 'WAIT' ? (nextStep.config as any).delay || 0 : 0;

        await this.workflowQueue.add('process-step', { executionId, stepId: nextStep.id }, { delay });
    }
}
