import { Document, ObjectId } from "mongoose"
export interface IAchievement extends Document {
    title: string;
    description?: string;
    date: Date;
    categories: ObjectId[];
    awardedBy?: string;
    department: ObjectId;
    attachments?: string[];
}