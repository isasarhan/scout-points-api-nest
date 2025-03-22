import { Type } from "class-transformer";
import {
    IsArray,
    IsDate,
    IsMongoId,
    IsNotEmpty,
    IsNumber,
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
    @IsArray()
    @IsMongoId({ each: true })
    categories: ObjectId[];

    @IsOptional()
    @IsString()
    awardedBy: ObjectId;
   
    @IsOptional()
    @IsNumber()
    points: number;

    @IsNotEmpty()
    @IsArray()
    @IsMongoId({ each: true })
    departments: ObjectId[];

    @IsOptional()
    @IsString({ each: true })
    attachments: string[];
}
