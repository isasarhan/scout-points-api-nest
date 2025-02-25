import { Document, ObjectId } from "mongoose"
export interface IAchievement extends Document {
    title: string;
    description?: string;
    date: Date;
    category: ObjectId;
    awardedBy?: string;
    user: ObjectId;
    attachments?: string[];
}