import { Types } from "mongoose";

export interface IBlog {
    author: string
    title: string
    content?: string
    categories?: Types.ObjectId[]
    coverImage?: string;
    enabled?: boolean;
    featuredImage?: string;
    rating?: number
}