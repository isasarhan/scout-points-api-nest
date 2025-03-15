import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId, Types } from "mongoose";

@Schema()
export class Achievement {
    @Prop({ required: true })
    title: string

    @Prop()
    description: string

    @Prop({ required: true })
    date: Date

    @Prop({ type: Types.ObjectId, ref: 'AchievementCategory', required: true })
    categories: ObjectId[]

    @Prop()
    awardedBy: string
    
    @Prop({ type: Types.ObjectId, ref: 'Departments', required: true })
    department: ObjectId
    
    @Prop()
    attachments: string[]
}


export const AchievementSchema = SchemaFactory.createForClass(Achievement)