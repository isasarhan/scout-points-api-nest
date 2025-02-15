import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";


@Schema()
export class AchievementCategory {
    @Prop({ required: true, unique: true })
    name: string;

    @Prop()
    description: string;
}

export const AchievementCategorySchema = SchemaFactory.createForClass(AchievementCategory);
