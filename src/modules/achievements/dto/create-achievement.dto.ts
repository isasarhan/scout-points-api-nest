import { Type } from "class-transformer";
import {
    IsArray,
    IsDate,
    IsMongoId,
    IsNotEmpty,
    IsOptional,
    IsString
} from "class-validator";
import { ObjectId } from "mongoose";

export class CreateAchievementDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    deadline: Date;

    @IsNotEmpty()
    @IsMongoId()
    @IsArray()
    categories: ObjectId[];

    @IsOptional()
    @IsString()
    awardedBy: ObjectId;

    @IsNotEmpty()
    @IsMongoId()
    @IsArray()
    departments: ObjectId[];

    @IsOptional()
    @IsString({ each: true })
    attachments: string[];
}
