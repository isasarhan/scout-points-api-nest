import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { EnumAssociationType } from "../interface/association.interface";

@Schema({ timestamps: true })
export class Association extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ type: String, enum: EnumAssociationType, default: EnumAssociationType.SCOUT })
    type: EnumAssociationType;

    @Prop()
    description?: string;

    @Prop()
    website?: string;
}

export const AssociationSchema = SchemaFactory.createForClass(Association);
