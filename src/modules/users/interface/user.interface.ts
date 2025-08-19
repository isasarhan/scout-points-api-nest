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
    phone: string;
    address: Address;
    nationality: string;
    points: number;
    achievements: ObjectId[]
    department: ObjectId 
    profileUrl:string
    rank: Rank;
}

export enum Rank {
    ALL='all',
    LEADER = 'leader',
    ROVER = 'rover',
    ADVANCED_SCOUT = 'advanced scout',
    SCOUT = 'scout',
    CUB = 'cub',
}
