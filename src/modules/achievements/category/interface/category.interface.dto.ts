import { Document } from "mongoose"


export interface IAchievemntCategory extends Document {
    name: string
    description: string
}