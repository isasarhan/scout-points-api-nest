import { Injectable } from '@nestjs/common';
import { AchievementRequest } from './schema/achievements-requests.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAchievementRequestDto } from './dto/create-achievements-requests.dto';
import { UpdateAchievementRequestDto } from './dto/update-achievements-requests.dto';


@Injectable()
export class AchievementRequestService {
    constructor(@InjectModel(AchievementRequest.name) private achievementRequestModel: Model<AchievementRequest>,) { }

    async create(achievementRequestDto: CreateAchievementRequestDto) {
        const achievementRequest = new this.achievementRequestModel({ ...achievementRequestDto })
        return await achievementRequest.save()
    }

    async update(id: string, achievementRequest: UpdateAchievementRequestDto) {
        return await this.achievementRequestModel.findByIdAndUpdate(id, {
            $set: achievementRequest
        }, { new: true })
    }

    async findAll() {
        return await this.achievementRequestModel.find().populate('user').populate('achievement').exec()
    }

    async findById(id: string) {
        return await this.achievementRequestModel.findById(id).exec()
    }

    async findByUserId(id: string) {
        return await this.achievementRequestModel.find({ user: id }).exec()
    }

    async delete(id: string) {
        return await this.achievementRequestModel.findByIdAndDelete(id)
    }
}   
