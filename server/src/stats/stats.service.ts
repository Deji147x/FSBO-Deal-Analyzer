import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StatsService {
    constructor(private prisma: PrismaService) { }

    async getOverviewStats() {
        const [totalLeads, activeProperties, totalExecutions] = await Promise.all([
            this.prisma.lead.count(),
            this.prisma.property.count(),
            this.prisma.automationExecution.count(),
        ]);

        // Simple revenue estimate: sum of property estimated values
        const revenueSum = await this.prisma.property.aggregate({
            _sum: { estimatedValue: true },
        });

        const markets = await this.prisma.lead.groupBy({
            by: ['city', 'state'],
            _count: { _all: true },
            _avg: { score: true },
            orderBy: { _count: { city: 'desc' } },
            take: 5,
        });

        return {
            totalLeads,
            activeProperties,
            totalExecutions,
            potentialRevenue: revenueSum._sum.estimatedValue || 0,
            topMarkets: markets.map(m => ({
                city: `${m.city}, ${m.state}`,
                leads: m._count._all,
                score: Math.round(m._avg.score || 0),
            })),
        };
    }
}
