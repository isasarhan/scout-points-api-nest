import { BaseBlogCategoryArgs, CreateBlogCategoryArgs } from "./create-blog-category.dto"
import { ObjectId } from "mongoose";
import { IsMongoId, IsOptional } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateBlogCategoryArgs extends PartialType(CreateBlogCategoryArgs) {
    @IsMongoId()
    id: ObjectId
}
