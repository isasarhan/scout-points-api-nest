import { Type } from "class-transformer";
import {
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
    date?: Date;

    @IsOptional()
    @IsMongoId()
    category?: ObjectId;

    @IsOptional()
    @IsString()
    awardedBy?: string;

    @IsOptional()
    @IsMongoId()
    department?: ObjectId;

    @IsOptional()
    @IsString({ each: true })
    attachments?: string[];
}
