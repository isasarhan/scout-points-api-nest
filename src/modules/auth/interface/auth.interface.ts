import { Document } from "mongoose";


export interface IAccount extends Document {
    user: string;
    username: string
    password: string;
    isApproved: boolean;
    phone: string;
    isSuperAdmin: boolean;
    role: Role
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
    ALL = 'all',
    LEADER = 'leader',
    ROVER = 'rover',
    ADVANCED_SCOUT = 'advanced scout',
    SCOUT = 'scout',
    CUB = 'cub',
}
