import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AutomationService } from '../automation/automation.service';
import { AiService } from '../ai/ai.service';
import { PropertiesService } from '../properties/properties.service';
import { AuditService } from '../audit/audit.service';
import { Lead, LeadStatus, Prisma } from '../generated/client';

@Injectable()
export class LeadsService {
    private readonly logger = new Logger(LeadsService.name);

    constructor(
        private prisma: PrismaService,
        private automation: AutomationService,
        private aiService: AiService,
        private propertiesService: PropertiesService,
        private audit: AuditService,
    ) { }

    async create(data: Prisma.LeadCreateInput): Promise<Lead> {
        return this.prisma.lead.create({
            data,
        });
    }

    async findAll(): Promise<Lead[]> {
        return this.prisma.lead.findMany({
            include: {
                property: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }

    async findOne(id: string): Promise<Lead | null> {
        return this.prisma.lead.findUnique({
            where: { id },
            include: {
                property: true,
                interactions: true,
            },
        });
    }

    async update(id: string, data: Prisma.LeadUpdateInput): Promise<Lead> {
        return this.prisma.lead.update({
            where: { id },
            data,
        });
    }

    async delete(id: string): Promise<Lead> {
        return this.prisma.lead.delete({
            where: { id },
        });
    }

    async ingestLead(data: any): Promise<Lead> {
        const { property, ...leadData } = data;

        // Calculate initial lead score
        const score = this.calculateLeadScore(data);

        const lead = await this.prisma.lead.create({
            data: {
                ...leadData,
                score,
                property: property ? {
                    create: {
                        ...property,
                        address: property.address || leadData.address,
                        bed: property.bed ? parseInt(property.bed.toString()) : undefined,
                        bath: property.bath ? parseFloat(property.bath.toString()) : undefined,
                        sqft: property.sqft ? parseInt(property.sqft.toString()) : undefined,
                    },
                } : undefined,
            },
            include: {
                property: true,
            },
        });

        // Trigger automations for the new lead
        try {
            await this.automation.triggerWorkflowsForLead(lead.id, 'NEW_LEAD');
        } catch (error) {
            this.logger.error(`Failed to trigger automations for lead ${lead.id}`, error);
        }

        // Generate AI Insight
        try {
            await this.aiService.generateLeadSummary(lead.id);
        } catch (error) {
            this.logger.error(`Failed to generate AI summary for lead ${lead.id}`, error);
        }

        return lead;
    }

    private calculateLeadScore(data: any): number {
        let score = 50; // Base score

        // Heuristics
        if (data.property?.bed >= 3) score += 10;
        if (data.source === 'ZILLOW') score += 15;
        if (data.phone) score += 5;
        if (data.email) score += 5;

        return Math.min(score, 100);
    }
}
