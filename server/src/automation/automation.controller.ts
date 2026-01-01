import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AutomationService } from './automation.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('automation')
@UseGuards(JwtAuthGuard)
export class AutomationController {
    constructor(
        private readonly automationService: AutomationService,
        private readonly prisma: PrismaService,
    ) { }

    @Get('workflows')
    async findAllWorkflows() {
        return this.prisma.automationWorkflow.findMany({
            include: { steps: true },
        });
    }

    @Post('workflows')
    async createWorkflow(@Body() data: any) {
        const { steps, ...workflowData } = data;
        return this.prisma.automationWorkflow.create({
            data: {
                ...workflowData,
                steps: {
                    create: steps,
                },
            },
            include: { steps: true },
        });
    }

    @Get('executions')
    async findAllExecutions() {
        return this.prisma.automationExecution.findMany({
            include: {
                workflow: true,
                lead: true,
                results: { include: { step: true } }
            },
            orderBy: { startedAt: 'desc' },
        });
    }

    @Post('trigger/:workflowId')
    async triggerManual(@Param('workflowId') workflowId: string, @Body('leadId') leadId: string) {
        return this.automationService.startWorkflowExecution(leadId, workflowId);
    }
}
