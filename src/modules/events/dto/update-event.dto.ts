import { ObjectId } from "mongoose";
import { EventType, Status, TimeRangeValue } from "../interface/event.interface";
import { IsEnum, IsOptional } from "class-validator";

export class UpdateAttendeeDto {
    @IsOptional()
    user?: ObjectId;

    @IsOptional()
    attendance?: Date;

    @IsOptional()
    @IsEnum(Status)
    status?: Status;
}

export class UpdateEventDto {
    @IsOptional()
    @IsEnum(EventType)
    type?: EventType
    
    @IsOptional()
    location?: string;

    @IsOptional()
    name?: string;
    
    @IsOptional()
    timeRange?: TimeRangeValue;

    @IsOptional()
    description?: string;
    
    @IsOptional()
    startDate?: Date;

    @IsOptional()
    manager?: ObjectId
    
    @IsOptional()
    department?: ObjectId

    @IsOptional()
    endDate?: Date;

    @IsOptional()
    attendees?: UpdateAttendeeDto[];
}
