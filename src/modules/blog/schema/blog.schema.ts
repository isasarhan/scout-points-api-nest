import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

@Schema()
export class Blog {
    @Prop({ type: Types.ObjectId, ref: "User", required: true })
    author: string

    @Prop({ required: true })
    title: string

    @Prop()
    content: string

    @Prop({ type: [Types.ObjectId], ref: 'BlogCategory' })
    categories: Types.ObjectId[]

    @Prop()
    coverImage?: string;

    @Prop({ default: true })
    enabled?: boolean;

    @Prop()
    featuredImage?: string;

    @Prop({ min: 1, max: 5, default: 1 })
    rating: number

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop()
    updatedAt: Date;
}

export const BlogSchema = SchemaFactory.createForClass(Blog)