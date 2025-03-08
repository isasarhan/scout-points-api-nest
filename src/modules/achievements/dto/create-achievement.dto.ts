import { Type } from "class-transformer";
import {
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

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    date: Date;

    @IsNotEmpty()
    @IsMongoId()
    category: ObjectId;

    @IsOptional()
    @IsString()
    awardedBy: string;

    @IsNotEmpty()
    @IsMongoId()
    department: ObjectId;

    @IsOptional()
    @IsString({ each: true })
    attachments: string[];
}
