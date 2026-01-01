import { Module } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadsController } from './leads.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { AutomationModule } from '../automation/automation.module';
import { AiModule } from '../ai/ai.module';
import { PropertiesModule } from '../properties/properties.module';

@Module({
  imports: [PrismaModule, AuthModule, AutomationModule, AiModule, PropertiesModule],
  providers: [LeadsService],
  controllers: [LeadsController],
  exports: [LeadsService],
})
export class LeadsModule { }
