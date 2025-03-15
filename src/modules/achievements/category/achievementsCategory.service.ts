import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { AchievementCategory } from "./schema/achievementsCategory.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CreateAchievementCategoryDto } from "./dto/create-category.dto";
import { IAchievemntCategory } from "./interface/category.interface.dto";
import { UpdateAchievementCategoryDto } from "./dto/update-category.dto";
import { GetAchievementCategoryDto } from "./dto/get-category.dto";


@Injectable()
export class AchievementsCategoriesService {
    constructor(@InjectModel(AchievementCategory.name) private achievementCategoryModel: Model<AchievementCategory>) { }

    async create(categoryDto: CreateAchievementCategoryDto): Promise<IAchievemntCategory> {
        if (await this.achievementCategoryModel.findOne({ name: categoryDto.name }))
            throw new InternalServerErrorException('Category Name Already exist')

            const category = new this.achievementCategoryModel({ ...categoryDto })
        return await category.save()
    }

    async update(categoryDto: UpdateAchievementCategoryDto): Promise<IAchievemntCategory | null> {
        const { _id, ...category } = categoryDto
        return await this.achievementCategoryModel.findByIdAndUpdate(_id, {
            $set: category
        }, { new: true })
    }
    async findAll(): Promise<IAchievemntCategory[]> {
        return await this.achievementCategoryModel.find().exec()
    }

    async findById(id: string) {
        return await this.achievementCategoryModel.findById(id).exec()
    }

    async delete(id: string) {
        if (!await this.achievementCategoryModel.findById(id))
            throw new NotFoundException('User Not Found')

        return await this.achievementCategoryModel.findByIdAndDelete(id)
    }
}