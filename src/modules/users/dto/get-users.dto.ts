import { IsEmail, IsMongoId, IsOptional } from "class-validator";

export class GetUsersFilterDto {
    @IsOptional()
    phone?: string

    @IsEmail()
    @IsOptional()
    email?: string
    
    @IsOptional()
    @IsMongoId()
    department?: string

    @IsOptional()
    searchTerm?: string
}