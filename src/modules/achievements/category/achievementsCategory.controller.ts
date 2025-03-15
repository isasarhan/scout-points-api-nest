import { Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { AchievementsCategoriesService } from "./achievementsCategory.service";
import { CreateAchievementCategoryDto } from "./dto/create-category.dto";
import { UpdateAchievementCategoryDto } from "./dto/update-category.dto";
import { GetAchievementCategoryDto } from "./dto/get-category.dto";

@Controller('achievements-categories')
export class AchievementsCategoryController {
    constructor(private categoriesService: AchievementsCategoriesService) { }

    @Get(':id')
    async findById(@Param() params: GetAchievementCategoryDto) {
        return await this.categoriesService.findById(params.id)
    }

    @Get('')
    async findAllCategories() {
        return await this.categoriesService.findAll()
    }

    @Post('add')
    async createCategory(createCategory: CreateAchievementCategoryDto) {
        return await this.categoriesService.create(createCategory)
    }


    @Delete('edit')
    async editCategory(updateCategory: UpdateAchievementCategoryDto) {
        return await this.categoriesService.update(updateCategory)
    }

    @Delete('delete')
    async deleteCategory(id: string) {
        return await this.categoriesService.delete(id)
    }
}