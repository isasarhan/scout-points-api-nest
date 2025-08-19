import { IsEnum, IsMongoId, IsNotEmpty, IsOptional } from "class-validator";
import { Role } from "../interface/auth.interface";
import { CreateUserDto } from "src/modules/users/dto/create-user.dto";
import { Types } from "mongoose";

export class CreateAccountDto {
    @IsNotEmpty()
    @IsMongoId()
    user: Types.ObjectId;

    @IsNotEmpty()
    username: string;
    
    @IsNotEmpty()
    password: string;

    @IsOptional()
    isSuperAdmin: boolean;

    @IsEnum(Role)
    @IsOptional()
    role: Role;
    
    @IsOptional()
    isApproved: boolean;
}
export class CreateUserAccountDto extends CreateUserDto{
    @IsNotEmpty()
    username: string;
    
    @IsNotEmpty()
    password: string;

    @IsOptional()
    isSuperAdmin: boolean;

    @IsEnum(Role)
    @IsOptional()
    role: Role;
    
    @IsOptional()
    isApproved: boolean;
}