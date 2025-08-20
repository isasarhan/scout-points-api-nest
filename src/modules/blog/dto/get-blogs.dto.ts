import { Pagination } from "src/common/types/filter";
import { IsOptional } from "class-validator";

export class GetBlogsArgs extends Pagination {
    @IsOptional()
    categories?: string[]
} 
