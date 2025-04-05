import { Type } from "class-transformer";
import {
    IsArray,
    IsDate,
    IsEnum,
    IsMongoId,
    IsOptional,
    IsString,
} from "class-validator";
import { ObjectId } from "mongoose";
import { Level } from "../interface/achievements.interface";

export class UpdateAchievementDto {
    @IsOptional()
    @IsMongoId()
    _id?: ObjectId;

    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    deadline?: Date;

    @IsOptional()
    @IsMongoId()
    @IsArray()
    categories: ObjectId[];

    @IsOptional()
    @IsString()
    awardedBy?: string;

    @IsOptional()
    @IsMongoId()
    @IsArray()
    department?: ObjectId[];

    @IsOptional()
    @IsString({ each: true })
    attachments?: string[];

    @IsOptional()
    @IsString({ each: true })
    requirements: string[];

    @IsEnum(Level)
    @IsOptional()
    level: Level;
}
