import { Document, ObjectId } from "mongoose";

interface Address {
    street: string;
    building: string;
    floor: string;
    country: string;
    city: string;
}

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    fatherName: string;
    motherName: string;
    email: string;
    password: string;
    phone: string;
    isSuperAdmin: boolean;
    address: Address;
    nationality: string;
    points: number;
    achievements: ObjectId[]
    department: ObjectId 
    profileUrl:string
    role: Role
    rank: Rank;
    matchPassword(enteredPassword: string): Promise<boolean>;
}

export enum Role {
    ADMIN = 'admin',
    USER = 'user',
    MANAGER = 'manager',
    MODERATOR = 'moderator',
    LEADER = 'leader',
}

export enum Rank {
    LEADER = 'leader',
    ROVER = 'rover',
    ADVANCED_SCOUT = 'advanced scout',
    SCOUT = 'scout',
    CUB = 'cub',
}
