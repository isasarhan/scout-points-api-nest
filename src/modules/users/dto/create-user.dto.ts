import { IsArray, IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { Rank } from '../interface/user.interface';
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

    @IsNotEmpty()
    fatherName: string

    @IsOptional()
    motherName?: string
    
    @IsEmail()
    email: string;

    @IsOptional()
    profileUrl?: string

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

    @IsEnum(Rank)
    @IsOptional()
    rank?: Rank;
}
