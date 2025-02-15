import {
    IsMongoId,
    IsOptional,
    IsString,
} from "class-validator";

export class UpdateAchievementCategoryDto {
    @IsOptional()
    @IsMongoId()
    _id?: string;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;
}