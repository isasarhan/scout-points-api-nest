import { Document, ObjectId } from "mongoose";

export enum EnumDepartmentType {
    SCOUT = 'scout'
}
export enum EnumDepartmentStatus {
    ACTIVE = 'active',
    INACTIVE = 'in active',
    ARCHIVED = 'archived'
}
export interface ILocation {
    city: string;
    country: string;
    postalCode: string;
    street: string;
}

export interface IDepartment extends Document {
    name: string;
    username: string;
    location: ILocation;
    type: EnumDepartmentType;
    status: EnumDepartmentStatus;
    createdAt: Date;
    updatedAt: Date;
    description: string;
    manager?: ObjectId;
}