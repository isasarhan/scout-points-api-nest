import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId, Types } from "mongoose";

@Schema()
export class Achievement {
    @Prop({ required: true })
    title: string

    @Prop()
    description: string

    @Prop()
    deadline: Date

    @Prop({ type: Types.ObjectId, ref: 'AchievementCategory', required: true })
    categories: ObjectId[]

    @Prop({ type: Types.ObjectId, ref: 'Users' })
    awardedBy: ObjectId

    @Prop()
    points: number

    @Prop({ type: Types.ObjectId, ref: 'Departments', required: true })
    departments: ObjectId[]

    @Prop()
    attachments: string[]

    @Prop({ default: Date.now })
    createdAt: Date;    
}


export const AchievementSchema = SchemaFactory.createForClass(Achievement)