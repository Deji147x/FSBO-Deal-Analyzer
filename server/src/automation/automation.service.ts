import { Injectable, Logger } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AutomationService {
    private readonly logger = new Logger(AutomationService.name);

    constructor(
        private prisma: PrismaService,
        @InjectQueue('workflow-queue') private workflowQueue: Queue,
    ) { }

    async triggerWorkflowsForLead(leadId: string, triggerType: string) {
        this.logger.log(`Triggering workflows for lead ${leadId} with type ${triggerType}`);

        const workflows = await this.prisma.automationWorkflow.findMany({
            where: {
                triggerType,
                isActive: true,
            },
            include: {
                steps: {
                    orderBy: {
                        order: 'asc',
                    },
                },
            },
        });

        for (const workflow of workflows) {
            await this.startWorkflowExecution(leadId, workflow.id);
        }
    }

    async startWorkflowExecution(leadId: string, workflowId: string) {
        const workflow = await this.prisma.automationWorkflow.findUnique({
            where: { id: workflowId },
            include: { steps: { orderBy: { order: 'asc' } } },
        });

        if (!workflow || workflow.steps.length === 0) return;

        // Create execution record
        const execution = await this.prisma.automationExecution.create({
            data: {
                leadId,
                workflowId,
                status: 'RUNNING',
            },
        });

        // Queue the first step
        const firstStep = workflow.steps[0];
        const delay = firstStep.stepType === 'WAIT' ? (firstStep.config as any).delay || 0 : 0;

        await this.workflowQueue.add('process-step', {
            executionId: execution.id,
            stepId: firstStep.id
        }, { delay });

        this.logger.log(`Started execution ${execution.id} for workflow ${workflowId} and lead ${leadId}`);
    }
}
