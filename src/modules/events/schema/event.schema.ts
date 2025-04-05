import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { ObjectId, Types } from 'mongoose';
import { EventType, Status } from '../interface/event.interface';

@Schema({ _id: false })
class Attende {
    @Prop()
    attendance: Date;

    @Prop({ type: Types.ObjectId, ref: "User" })
    user: ObjectId

    @Prop({ type: String, enum: Status, default: Status.PRESENT })
    status: Status;
}

@Schema({ _id: false })
export class TimeValue {
  @Prop({ required: true })
  hour: string;

  @Prop({ required: true })
  minute: string;

  @Prop({ required: true, enum: ['AM', 'PM'] })
  period: 'AM' | 'PM';
}


@Schema({ _id: false })
export class TimeRangeValue {
  @Prop({ type: TimeValue, required: true })
  startTime: TimeValue;

  @Prop({ type: TimeValue, required: true })
  endTime: TimeValue;
}

@Schema()
export class Event {
    @Prop({ type: [Attende] })
    @Type(() => Attende)
    attendees: Attende[]

    @Prop({ type: TimeRangeValue })
    @Type(() => TimeRangeValue)
    timeRange: TimeRangeValue

    @Prop({ required: true })
    location: string;

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop({ required: true })
    startDate: Date;

    @Prop()
    endDate: Date;
    
    @Prop({ type: Types.ObjectId, ref: "User" })
    manager: ObjectId;
    
    @Prop({ type: Types.ObjectId, ref: "Department" })
    departments: ObjectId[];

    @Prop({ type: String, enum: EventType, default: EventType.INDOOR })
    type: EventType;
}

export const EventSchema = SchemaFactory.createForClass(Event);
