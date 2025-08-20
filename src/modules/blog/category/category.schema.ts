import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CategoryDocument = BlogCategory & Document;

@Schema({ timestamps: true })
export class BlogCategory {
  @Prop({ required: true })
  name: string;

  @Prop()
  slug: string;

  @Prop()
  img: string;

  @Prop()
  description: string;
}

export const BlogCategorySchema = SchemaFactory.createForClass(BlogCategory);
