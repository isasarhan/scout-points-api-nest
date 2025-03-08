import { Controller, Delete, Get, Post } from "@nestjs/common";
import { AchievementsCategoriesService } from "./achievementsCategory.service";
import { CreateAchievementCategoryDto } from "./dto/create-category.dto";
import { UpdateAchievementCategoryDto } from "./dto/update-category.dto";

@Controller('achievements-categories')
export class AchievementsCategoryController {
    constructor(private categoriesService: AchievementsCategoriesService) { }

    @Get('')
    async findAllCategories() {
        return await this.categoriesService.findAllCategories()
    }

    @Post('add')
    async createCategory(createCategory: CreateAchievementCategoryDto) {
        return await this.categoriesService.createCategory(createCategory)
    }


    @Delete('edit')
    async editCategory(updateCategory: UpdateAchievementCategoryDto) {
        return await this.categoriesService.updateCategory(updateCategory)
    }

    @Delete('delete')
    async deleteCategory(id: string) {
        return await this.categoriesService.deleteCategory(id)
    }
}