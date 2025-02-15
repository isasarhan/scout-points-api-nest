import { IsMongoId, IsOptional, IsString, IsUrl } from "class-validator";

export class UpdateAssociationDto {
    @IsOptional()
    @IsMongoId()
    _id?: string

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    type?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsUrl()
    website?: string;
}
