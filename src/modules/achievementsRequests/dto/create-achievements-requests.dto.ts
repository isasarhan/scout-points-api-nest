import { Type } from "class-transformer";
import {
    IsArray,
    IsDate,
    IsEnum,
    IsMongoId,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString
} from "class-validator";
import { ObjectId } from "mongoose";
import { Status } from "../schema/achievements-requests.schema";

export class CreateAchievementRequestDto {
    @IsNotEmpty()
    @IsMongoId()
    user: ObjectId

    @IsNotEmpty()
    @IsMongoId()
    achievement: ObjectId

    @IsEnum(Status)
    @IsOptional()
    status: Status;

}
