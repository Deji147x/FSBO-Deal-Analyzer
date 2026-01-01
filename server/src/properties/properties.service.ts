import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { AuditService } from '../audit/audit.service';

@Injectable()
export class PropertiesService {
    private readonly logger = new Logger(PropertiesService.name);

    constructor(
        private prisma: PrismaService,
        private config: ConfigService,
        private audit: AuditService,
    ) { }

    async enrichPropertyData(leadId: string) {
        this.logger.log(`Enriching property data for lead ${leadId}`);

        const lead = await this.prisma.lead.findUnique({
            where: { id: leadId },
        });

        if (!lead) {
            throw new Error(`Lead ${leadId} not found`);
        }

        // In a real app, we would use Google Maps Geocoding API here
        // const apiKey = this.config.get('GOOGLE_MAPS_API_KEY');

        // Simulating data enrichment
        const enrichedData = {
            lat: 38.9072 + (Math.random() - 0.5) * 0.1,
            lng: -77.0369 + (Math.random() - 0.5) * 0.1,
            bed: Math.floor(Math.random() * 3) + 2, // 2-4 beds
            bath: Math.floor(Math.random() * 2) + 1.5, // 1.5-3.5 baths
            sqft: Math.floor(Math.random() * 1000) + 1500, // 1500-2500 sqft
            estimatedValue: Math.floor(Math.random() * 200000) + 300000, // 300k-500k
            taxAssessedValue: Math.floor(Math.random() * 150000) + 250000,
        };

        const property = await this.prisma.property.upsert({
            where: { leadId },
            update: enrichedData,
            create: {
                leadId,
                address: lead.address,
                ...enrichedData,
            },
        });

        // Log the action
        await this.audit.logAction({
            entityType: 'PROPERTY',
            entityId: property.id,
            action: 'ENRICH',
            after: property,
        });

        return property;
    }
}
