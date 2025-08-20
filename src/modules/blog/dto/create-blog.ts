import { Optional } from "@nestjs/common";
import { IsNotEmpty, IsOptional, Length, ValidateNested } from "class-validator";
import { Types } from 'mongoose'

export class CreateBlogArgs {
    @IsNotEmpty()
    author: string
    
    @IsNotEmpty()
    title: string
    
    @Optional()
    content: string
    
    @Optional()
    enabled?: boolean;
    
    @Length(1, 5)
    @IsOptional()
    rating?: number
    
    @Optional()
    @ValidateNested({ each: true })
    categories: Types.ObjectId[]

    @Optional()
    coverImage?: string;

    @Optional()
    featuredImage?: string;
}
