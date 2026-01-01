import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { Prisma } from '../generated/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('leads')
export class LeadsController {
    constructor(private readonly leadsService: LeadsService) { }

    @Post('ingest')
    async ingest(@Body() body: any) {
        return this.leadsService.ingestLead(body);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createLeadDto: Prisma.LeadCreateInput) {
        return this.leadsService.create(createLeadDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.leadsService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.leadsService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateLeadDto: Prisma.LeadUpdateInput) {
        return this.leadsService.update(id, updateLeadDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.leadsService.delete(id);
    }
}
