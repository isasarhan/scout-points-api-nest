import {
    IsMongoId,
    IsOptional,
    IsString,
} from "class-validator";

export class UpdateAchievementCategoryDto {
    @IsMongoId()
    _id?: string;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    imageUrl: string;
}