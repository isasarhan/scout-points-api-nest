import { Module } from "@nestjs/common";
import { AchievementsCategoriesService } from "./achievementsCategory.service";
import { AchievementsCategoryController } from "./achievementsCategory.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { AchievementCategory, AchievementCategorySchema } from "./schema/achievementsCategory.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: AchievementCategory.name, schema: AchievementCategorySchema }])],
    controllers: [AchievementsCategoryController],
    providers: [AchievementsCategoriesService]
})
export class AchievementsCategoriesModule {}