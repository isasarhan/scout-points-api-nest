import { Document, Types } from "mongoose";

export interface IAssociation extends Document{
    name: string;
    type: string;
    description?: string;
    website?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
