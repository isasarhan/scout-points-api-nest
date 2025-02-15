import { Injectable } from "@nestjs/common";
import { AchievementCategory } from "./schema/achievementsCategory.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CreateAchievementCategoryDto } from "./dto/create-category.dto";
import { IAchievemntCategory } from "./interface/category.interface.dto";
import { UpdateAchievementCategoryDto } from "./dto/update-category.dto";
import { GetAchievementCategoryDto } from "./dto/get-category.dto";


@Injectable()
export class AchievementsCategoriesService {
    constructor(@InjectModel(AchievementCategory.name) private achievementCategoryModel: Model<AchievementCategory>){}

    async createCategory(categoryDto: CreateAchievementCategoryDto): Promise<IAchievemntCategory> {
        const category = new this.achievementCategoryModel({ ...categoryDto })
        return await category.save()
    }

    async updateCategory(categoryDto: UpdateAchievementCategoryDto): Promise<IAchievemntCategory | null> {
        const { _id, ...category } = categoryDto
        return await this.achievementCategoryModel.findByIdAndUpdate(_id, {
            $set: category
        }, { new: true })
    }
    async findAllCategories(): Promise<IAchievemntCategory[]> {
        return await this.achievementCategoryModel.find().exec()
    }

    async findCategoryById(id: GetAchievementCategoryDto) {
        return await this.achievementCategoryModel.findById(id).exec()
    }

    async deleteCategory(id: string) {
        return await this.achievementCategoryModel.findByIdAndDelete(id)
    }
}