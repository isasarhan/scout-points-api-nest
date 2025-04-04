import { Document, Types } from "mongoose";

export interface IAssociation extends Document{
    name: string;
    type: EnumAssociationType;
    description?: string;
    website?: string;
    createdAt?: Date;
    updatedAt?: Date;
}


export enum EnumAssociationType {
    SCOUT = 'scout',
    UNIVERSITY = 'university',
    NEIGHBORHOOD = 'neighborhood'
}