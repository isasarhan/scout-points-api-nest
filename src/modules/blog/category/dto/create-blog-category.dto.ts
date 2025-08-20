import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class BaseBlogCategoryArgs {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    slug?: string;

    @IsOptional()
    description?: string;
}

export class CreateBlogCategoryArgs extends BaseBlogCategoryArgs {

    @IsOptional()
    img?: string;
}

