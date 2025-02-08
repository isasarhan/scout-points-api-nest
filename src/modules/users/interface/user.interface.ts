import { Document } from "mongoose";

interface Address {
    street: string;
    building: string;
    floor: string;
    country: string;
    city: string;
}

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    phone: string;
    address: Address;
    nationality: string;
    points: number;
    department: string;
    role: Role
    matchPassword(enteredPassword: string): Promise<boolean>;
}

export enum Role {
    ADMIN = 'admin',
    USER = 'user',
    MANAGER = 'manager',
    MODERATOR = 'moderator',
}
