import { IsMongoId } from 'class-validator';

export class GetAchievementDto {
  @IsMongoId()
  id: string;
}
