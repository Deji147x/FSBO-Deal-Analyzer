import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AiService implements OnModuleInit {
    private readonly logger = new Logger(AiService.name);
    private openai: OpenAI | null = null;

    constructor(
        private configService: ConfigService,
        private prisma: PrismaService,
    ) { }

    onModuleInit() {
        const apiKey = this.configService.get<string>('OPENAI_API_KEY');
        if (apiKey) {
            this.openai = new OpenAI({ apiKey });
            this.logger.log('OpenAI initialized successfully');
        } else {
            this.logger.warn('OPENAI_API_KEY not found. AI features will be disabled.');
        }
    }

    async generateLeadSummary(leadId: string) {
        if (!this.openai) return null;

        const lead = await this.prisma.lead.findUnique({
            where: { id: leadId },
            include: {
                property: true,
                interactions: {
                    orderBy: { sentAt: 'desc' },
                    take: 10,
                },
            },
        });

        if (!lead) throw new Error('Lead not found');

        const prompt = `
      Analyze the following lead and property data for a real estate investor:
      Lead: ${lead.name}
      Status: ${lead.status}
      Property: ${lead.property?.address}, ${lead.property?.bed} beds, ${lead.property?.bath} baths, ${lead.property?.sqft} sqft
      Recent Interactions:
      ${lead.interactions.map(i => `- [${i.channel}] ${i.direction}: ${i.content}`).join('\n')}

      Provide a concise summary of the lead's current situation, sentiment (POSITIVE, NEUTRAL, NEGATIVE), and 3-5 key takeaways.
      Format the response as JSON:
      {
        "summary": "...",
        "sentiment": "POSITIVE/NEUTRAL/NEGATIVE",
        "keyTakeaways": ["...", "...", "..."]
      }
    `;

        try {
            const response = await this.openai.chat.completions.create({
                model: 'gpt-4o',
                messages: [{ role: 'user', content: prompt }],
                response_format: { type: 'json_object' },
            });

            const content = JSON.parse(response.choices[0].message.content || '{}');

            // Save the insight
            return await this.prisma.aiInsight.create({
                data: {
                    leadId,
                    summary: content.summary,
                    sentiment: content.sentiment,
                    keyTakeaways: content.keyTakeaways,
                },
            });
        } catch (error) {
            this.logger.error(`Failed to generate AI summary for lead ${leadId}`, error);
            throw error;
        }
    }
}
