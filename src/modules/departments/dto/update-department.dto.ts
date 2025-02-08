import { IsEnum, IsMongoId, IsNotEmpty, IsString } from "class-validator";
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

export class UpdateDepartmentDto {
  @IsNotEmpty()
  @IsMongoId()
  _id: string;
  
  @IsNotEmpty()
  name: string;
  
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  location: LocationDto;

  @IsEnum(EnumDepartmentType)
  type: EnumDepartmentType;
  
  @IsEnum(EnumDepartmentStatus)
  status: EnumDepartmentStatus;

  @IsString()
  description: string;

  @IsMongoId()
  manager: ObjectId;
}
