import { Injectable } from '@nestjs/common';
import {  Achievement } from './schema/achievements.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { IAchievement } from './interface/achievements.interface';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { GetAchievementDto } from './dto/get-achievement.dto';

@Injectable()
export class AchievementsService {
    constructor(@InjectModel(Achievement.name) private achievementModel: Model<Achievement>,) { }

    async create(achievementDto: CreateAchievementDto): Promise<IAchievement> {
        const achievement = new this.achievementModel({ ...achievementDto })
        return await achievement.save()
    }

    async update(id:string, achievement: UpdateAchievementDto): Promise<IAchievement | null> {
        return await this.achievementModel.findByIdAndUpdate(id, {
            $set: achievement
        }, { new: true })
    }

    async findAll(): Promise<IAchievement[]> {
        return await this.achievementModel.find().exec()
    }

    async findById(id: GetAchievementDto) {
        return await this.achievementModel.findById(id).exec()
    }

    async delete(id: string) {
        return await this.achievementModel.findByIdAndDelete(id)
    }   
}   
