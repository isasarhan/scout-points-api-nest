import { Type } from "class-transformer";
import {
    IsArray,
    IsDate,
    IsMongoId,
    IsOptional,
    IsString,
} from "class-validator";
import { ObjectId } from "mongoose";

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
}
