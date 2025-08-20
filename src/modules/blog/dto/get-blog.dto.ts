import { IsMongoId } from "class-validator";

export class GetBlogArgs {

    @IsMongoId()
    id: string
}