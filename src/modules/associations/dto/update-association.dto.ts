import { IsEnum, IsMongoId, IsOptional, IsString, IsUrl } from "class-validator";
import { EnumAssociationType } from "../interface/association.interface";

export class UpdateAssociationDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsEnum(EnumAssociationType)
    type?: EnumAssociationType;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsUrl()
    website?: string;
}
