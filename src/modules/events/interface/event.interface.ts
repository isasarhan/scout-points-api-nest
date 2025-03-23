import { Document, ObjectId } from "mongoose";

export enum Status {
    PRESENT = "present",
    ABSENT = "absent",
    LATE = "late"
}
export enum EventType {
    INDOOR = "in door",
    OUTDOOR = "out door",
    OTHER = "other"
}

export interface IAttendee {
    user: ObjectId;
    attendance: Date;
    status: Status;
}

export interface IEvent extends Document {
    type: EventType
    location: string;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    manager?: ObjectId
    timeRange: TimeRangeValue
    department?: ObjectId;
    attendees: IAttendee[];
}

export type TimeValue = {
    hour: string
    minute: string
    period: "AM" | "PM"
}

export type TimeRangeValue = {
    startTime: TimeValue
    endTime: TimeValue
}