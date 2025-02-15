import { IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateAssociationDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    type: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsUrl()
    website?: string;
}
