import {
    IsNotEmpty,
    IsOptional,
    IsString
} from "class-validator";

export class CreateAchievementCategoryDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    imageUrl: string;

}