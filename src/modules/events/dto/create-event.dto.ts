import { ObjectId } from "mongoose";
import { EventType, Status, TimeRangeValue } from "../interface/event.interface";
import { IsArray, IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAttendeeDto {
    @IsMongoId()
    user: ObjectId;

    attendance: Date;

    @IsEnum(Status)
    status: Status;
}

export class CreateEventDto {
    @IsEnum(EventType)
    type?: EventType

    @IsString()
    location: string;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNotEmpty()
    startDate: Date;

    @IsNotEmpty()
    timeRange: TimeRangeValue;

    @IsOptional()
    endDate?: Date;

    @IsOptional()
    manager?: ObjectId

    @IsOptional()
    departments?: ObjectId[]

    @IsOptional()
    @IsArray()
    attendees?: CreateAttendeeDto[];
}

