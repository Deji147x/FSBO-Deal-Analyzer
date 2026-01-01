import { Controller, Post, Param, Get, UseGuards } from '@nestjs/common';
import { AiService } from './ai.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PrismaService } from '../prisma/prisma.service';

@Controller('ai')
@UseGuards(JwtAuthGuard)
export class AiController {
    constructor(
        private readonly aiService: AiService,
        private readonly prisma: PrismaService,
    ) { }

    @Post('summarize/:leadId')
    async summarize(@Param('leadId') leadId: string) {
        return this.aiService.generateLeadSummary(leadId);
    }

    @Get('insights/:leadId')
    async getInsights(@Param('leadId') leadId: string) {
        return this.prisma.aiInsight.findMany({
            where: { leadId },
            orderBy: { createdAt: 'desc' },
            take: 1,
        });
    }
}
