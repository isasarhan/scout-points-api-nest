import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({ timestamps: true })
export class Association extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    type: string;

    @Prop()
    description?: string;

    @Prop()
    website?: string;
}

export const AssociationSchema = SchemaFactory.createForClass(Association);
