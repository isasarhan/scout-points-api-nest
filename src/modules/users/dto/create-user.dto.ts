import { IsArray, IsEmail, IsEnum, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { Rank, Role } from '../interface/user.interface';
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

export class CreateUserDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsOptional()
    fatherName?: string

    @IsOptional()
    motherName?: string

    @IsOptional()
    profileUrl?: string

    @IsEmail()
    email: string;

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

    @IsEnum(Role)
    @IsOptional()
    role?: Role;

    @IsEnum(Rank)
    @IsOptional()
    rank?: Rank;
}
