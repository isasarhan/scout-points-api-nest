import { IsMongoId } from 'class-validator';

export class GetAchievementCategoryDto {
  @IsMongoId()
  id: string;
}