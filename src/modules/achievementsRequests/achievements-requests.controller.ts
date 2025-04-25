import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AchievementRequestService } from './achievements-requests.service';
import {  CreateAchievementRequestDto  } from './dto/create-achievements-requests.dto';
import { UpdateAchievementRequestDto } from './dto/update-achievements-requests.dto';

@Controller('achievement-request')
export class AchievementRequestController {
    constructor(private achievementRequestService: AchievementRequestService) { }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return await this.achievementRequestService.findById(id)
    }

    @Get('user/:id')
    async findByUserId(@Param('id') id: string) {
        return await this.achievementRequestService.findByUserId(id)
    }

    @Get()
    async findAll() {
        return await this.achievementRequestService.findAll()
    }

    @Post('add')
    async create(@Body() createAchievementRequestDto : CreateAchievementRequestDto ) {        
        return await this.achievementRequestService.create(createAchievementRequestDto )
    }

    @Put(':id')
    async edit(@Param('id') id: string, @Body() updateAchievement: UpdateAchievementRequestDto) {
        return await this.achievementRequestService.update(id, updateAchievement)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.achievementRequestService.delete(id)
    }
}
