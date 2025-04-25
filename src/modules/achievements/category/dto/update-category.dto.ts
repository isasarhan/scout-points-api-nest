import { PartialType } from '@nestjs/mapped-types';
import { CreateAchievementCategoryDto } from './create-category.dto';

export class UpdateAchievementCategoryDto extends PartialType(CreateAchievementCategoryDto){}