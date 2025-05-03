import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId, Types } from "mongoose";


export enum Status {
    Pending = 'pending',
    Complete = 'complete',
    Available = 'available',
}

@Schema({ timestamps: true })
export class AchievementRequest extends Document {
    @Prop({ type: Types.ObjectId, ref: 'User', required: false })
    user: ObjectId

    @Prop({ type: Types.ObjectId, ref: 'Achievement', required: false })
    achievement: ObjectId

    @Prop({ type: String, enum: Status, default: Status.Available })
    status: Status;

    @Prop({ default: Date.now })
    createdAt: Date;
}

export const AchievementRequestSchema = SchemaFactory.createForClass(AchievementRequest);
