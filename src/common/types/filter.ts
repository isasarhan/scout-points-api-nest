import { IsOptional } from "class-validator";

export type IFilter = Record<string, any>

export class Pagination {
  @IsOptional()
  page?: number;

  @IsOptional()
  pageSize?: number;

  @IsOptional()
  searchTerm?: string
}