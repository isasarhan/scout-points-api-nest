import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator";
import { EnumAssociationType } from "../interface/association.interface";

export class CreateAssociationDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEnum(EnumAssociationType)
    type: EnumAssociationType;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsUrl()
    website?: string;
}
