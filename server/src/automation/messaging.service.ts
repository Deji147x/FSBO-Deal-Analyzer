import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';
import { Twilio } from 'twilio';

@Injectable()
export class MessagingService {
    private readonly logger = new Logger(MessagingService.name);
    private resend: Resend | null = null;
    private twilio: Twilio | null = null;

    constructor(private configService: ConfigService) {
        const resendApiKey = this.configService.get<string>('RESEND_API_KEY');
        if (resendApiKey) {
            this.resend = new Resend(resendApiKey);
        } else {
            this.logger.warn('RESEND_API_KEY not found. Email features will be disabled.');
        }

        const twilioAccountSid = this.configService.get<string>('TWILIO_ACCOUNT_SID');
        const twilioAuthToken = this.configService.get<string>('TWILIO_AUTH_TOKEN');
        if (twilioAccountSid && twilioAuthToken) {
            this.twilio = new Twilio(twilioAccountSid, twilioAuthToken);
        } else {
            this.logger.warn('TWILIO credentials not found. SMS features will be disabled.');
        }
    }

    async sendEmail(to: string, subject: string, body: string) {
        if (!this.resend) {
            this.logger.error('Resend is not configured.');
            return { success: false, error: 'Resend not configured' };
        }

        try {
            const data = await this.resend.emails.send({
                from: this.configService.get<string>('EMAIL_FROM') || 'FSBO Analyzer <onboarding@resend.dev>',
                to: [to],
                subject,
                html: body,
            });
            return { success: true, data };
        } catch (error) {
            this.logger.error(`Failed to send email to ${to}`, error);
            return { success: false, error: error.message };
        }
    }

    async sendSms(to: string, body: string) {
        if (!this.twilio) {
            this.logger.error('Twilio is not configured.');
            return { success: false, error: 'Twilio not configured' };
        }

        try {
            const message = await this.twilio.messages.create({
                body,
                from: this.configService.get<string>('TWILIO_FROM_NUMBER'),
                to,
            });
            return { success: true, data: message };
        } catch (error) {
            this.logger.error(`Failed to send SMS to ${to}`, error);
            return { success: false, error: error.message };
        }
    }
}
