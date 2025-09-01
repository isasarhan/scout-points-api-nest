import { IsNotEmpty, IsOptional, Length, ValidateNested } from "class-validator";
import { Types } from 'mongoose'

export class CreateBlogArgs {
    @IsNotEmpty()
    author: string
    
    @IsNotEmpty()
    title: string
    
    @IsOptional()
    content: string
    
    @IsOptional()
    enabled?: boolean;
    
    @IsOptional()
    rating?: number
    
    @IsOptional()
    categories: Types.ObjectId[]

    @IsOptional()
    coverImage?: string;

    @IsOptional()
    featuredImage?: string;
}
