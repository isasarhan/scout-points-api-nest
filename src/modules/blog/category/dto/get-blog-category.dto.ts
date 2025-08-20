import { IsMongoId } from "class-validator";

export class GetBlogCategoryArgs {
    @IsMongoId()
    id: string
}