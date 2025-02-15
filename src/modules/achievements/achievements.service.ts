import { Injectable } from '@nestjs/common';
import { AchievementCategory, Achievement } from './schema/achievements.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAchievementCategoryDto, CreateAchievementDto } from './dto/create-achievement.dto';
import { IAchievement, IAchievemntCategory } from './interface/achievements.interface';

@Injectable()
export class AchievementsService {
    constructor(
        @InjectModel(Achievement.name) private achievementModel: Model<Achievement>,
        @InjectModel(AchievementCategory.name) private achievementCategoryModel: Model<AchievementCategory>) { }

    async create(achievementDto: CreateAchievementDto): Promise<IAchievement> {
        const achievement = new this.achievementModel({ ...achievementDto })
        return await achievement.save()
    }

    async findAll(): Promise<IAchievement[]> {
        return await this.achievementModel.find().exec()
    }

    async createCategory(categoryDto: CreateAchievementCategoryDto): Promise<IAchievemntCategory> {
        const category = new this.achievementCategoryModel({ ...categoryDto })
        return await category.save()
    }

    async findAllCategories(): Promise<IAchievemntCategory[]> {
        return await this.achievementCategoryModel.find().exec()
    }
}   
