import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AchievementsService } from './achievements.service';
import {  CreateAchievementDto } from './dto/create-achievement.dto';
import { GetAchievementDto } from './dto/get-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';

@Controller('achievements')
export class AchievementsController {
    constructor(private achievementService: AchievementsService) { }

    @Get(':id')
    async findById(@Param('id') id: GetAchievementDto) {
        return await this.achievementService.findById(id)
    }

    @Get()
    async findAll() {
        return await this.achievementService.findAll()
    }

    @Post('add')
    async create(@Body() createAchievementDto: CreateAchievementDto) {        
        return await this.achievementService.create(createAchievementDto)
    }

    @Put(':id')
    async edit(@Param('id') id: string, @Body() updateAchievement: UpdateAchievementDto) {
        return await this.achievementService.update(id, updateAchievement)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.achievementService.delete(id)
    }
}
