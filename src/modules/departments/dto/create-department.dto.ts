import { IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { EnumDepartmentStatus, EnumDepartmentType } from "../interface/department.interface";
import { ObjectId } from "mongoose";

export class LocationDto {
  @IsString()
  city: string;

  @IsString()
  country: string;

  @IsString()
  postalCode: string;

  @IsString()
  street: string;
}

export class CreateDepartmentDto {
  @IsNotEmpty()
  name: string;
  
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  location: LocationDto;

  @IsEnum(EnumDepartmentType)
  type: EnumDepartmentType;

  @IsString()
  status: EnumDepartmentStatus;

  @IsString()
  description: string;

    @IsMongoId()
    @IsOptional()
  manager?: ObjectId;
}
