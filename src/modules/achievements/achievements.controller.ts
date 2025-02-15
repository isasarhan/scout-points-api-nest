import { Controller, Get, Post } from '@nestjs/common';
import { AchievementsService } from './achievements.service';
import { CreateAchievementCategoryDto, CreateAchievementDto } from './dto/create-achievement.dto';

@Controller('achievements')
export class AchievementsController {
    constructor(private achievementService: AchievementsService) { }

    @Get()
    async findAll() {
        return await this.achievementService.findAll()
    }

    @Post('add')
    async create(createAchievementDto: CreateAchievementDto) {
        return await this.achievementService.create(createAchievementDto)
    }

    @Get('categories')
    async findAllCategories() {
        return await this.achievementService.findAllCategories()
    }
    
    @Post('categories/add')
    async createCategory(createCategory: CreateAchievementCategoryDto) {
        return await this.achievementService.createCategory(createCategory)
    }
}
