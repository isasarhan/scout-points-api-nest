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
    matchPassword(enteredPassword: string): Promise<boolean>;
}