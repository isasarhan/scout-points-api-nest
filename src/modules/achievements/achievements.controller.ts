import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AchievementsService } from './achievements.service';
import {  CreateAchievementDto } from './dto/create-achievement.dto';
import { GetAchievementDto } from './dto/get-achievement.dto';

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
        // if(!createAchievementDto.department)
        console.log('createAchievementDto', createAchievementDto);
        
        return await this.achievementService.create(createAchievementDto)
    }

}
