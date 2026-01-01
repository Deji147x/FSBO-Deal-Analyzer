import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuditService {
    private readonly logger = new Logger(AuditService.name);

    constructor(private prisma: PrismaService) { }

    async logAction(data: {
        userId?: string;
        entityType: string;
        entityId: string;
        action: string;
        before?: any;
        after?: any;
    }) {
        try {
            return await this.prisma.auditLog.create({
                data: {
                    userId: data.userId,
                    entityType: data.entityType,
                    entityId: data.entityId,
                    action: data.action,
                    before: data.before || undefined,
                    after: data.after || undefined,
                },
            });
        } catch (error) {
            this.logger.error('Failed to create audit log', error);
            // We don't throw here to avoid breaking the main operation
        }
    }

    async findByEntity(entityType: string, entityId: string) {
        return this.prisma.auditLog.findMany({
            where: { entityType, entityId },
            orderBy: { createdAt: 'desc' },
            include: { user: { select: { name: true, email: true } } },
        });
    }
}
