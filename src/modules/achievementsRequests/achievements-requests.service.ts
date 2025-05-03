import { Injectable, NotFoundException } from '@nestjs/common';
import { AchievementRequest, Status } from './schema/achievements-requests.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAchievementRequestDto } from './dto/create-achievements-requests.dto';
import { UpdateAchievementRequestDto } from './dto/update-achievements-requests.dto';
import { UsersService } from '../users/users.service';
import { AchievementsService } from '../achievements/achievements.service';


@Injectable()
export class AchievementRequestService {
    constructor(@InjectModel(AchievementRequest.name) private achievementRequestModel: Model<AchievementRequest>,
        private usersService: UsersService,
        private achievemntService: AchievementsService,

    ) { }

    async create(achievementRequestDto: CreateAchievementRequestDto) {
        const user = await this.usersService.findById(
            achievementRequestDto.user,
        );
        if (!user) throw new Error('user Not Found!');
        const achievementRequest = new this.achievementRequestModel({ ...achievementRequestDto })
        return await achievementRequest.save()
    }

    async update(id: string, achievementRequest: UpdateAchievementRequestDto) {
        if (!achievementRequest.user) throw new NotFoundException('User Not provided!');

        const user = await this.usersService.findById(
            achievementRequest.user,
        );

        if (!user) throw new NotFoundException('user Not Found!');

        if (!achievementRequest.achievement) throw new NotFoundException('User Not provided!');

        const achievement = await this.achievemntService.findById(
            achievementRequest.achievement,
        );

        if (!achievement) throw new NotFoundException('achievement Not Found!');        

        if (achievementRequest.status === Status.Complete)
            this.usersService.update(user._id, { points: user.points + achievement.points })
        
        if (achievementRequest.status === Status.Pending)
            this.usersService.update(user._id, { points: user.points - achievement.points })

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
