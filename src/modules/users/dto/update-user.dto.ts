import { IsArray, IsEmail, IsMongoId, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { Role } from '../interface/user.interface';
import { ObjectId } from 'mongoose';

class AddressDto {
    @IsNotEmpty()
    street: string;

    @IsNotEmpty()
    building: string;

    @IsNotEmpty()
    floor: string;

    @IsNotEmpty()
    country: string;

    @IsNotEmpty()
    city: string;
}

export class UpdateUserDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    email: string;

    @IsOptional()
    fatherName?: string

    @IsOptional()
    motherName?: string

    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsOptional()
    phone?: string;

    @IsOptional()
    address?: AddressDto;

    @IsOptional()
    nationality?: string;

    @IsOptional()
    points?: number;

    @IsArray()
    @IsOptional()
    achievements?: ObjectId[];

    @IsOptional()
    department?: ObjectId;

    @IsOptional()
    role?: Role;
}
