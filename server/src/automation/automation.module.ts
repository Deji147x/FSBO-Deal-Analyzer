import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { AutomationService } from './automation.service';
import { WorkflowEngineService } from './workflow-engine.service';
import { MessagingService } from './messaging.service';
import { AutomationController } from './automation.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    imports: [
        PrismaModule,
        BullModule.registerQueue({
            name: 'workflow-queue',
        }),
    ],
    controllers: [AutomationController],
    providers: [AutomationService, WorkflowEngineService, MessagingService],
    exports: [AutomationService],
})
export class AutomationModule { }
