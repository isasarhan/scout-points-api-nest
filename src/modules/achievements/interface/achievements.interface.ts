import { Document, ObjectId } from "mongoose"
export interface IAchievement extends Document {
    title: string;
    description: string;
    deadline?: Date;
    categories: ObjectId[];
    awardedBy?: ObjectId;
    departments: ObjectId[];
    attachments?: string[];
    points: number
    requirements: string[]
    level: Level;

}
export enum Level {
    BEGINNER = "beginner",
    INTERMEDIATE = "intermediate",
    ADVANCED = "advanced",
}
