import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { IUser } from './interface/user.interface';
@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async create(userDto: CreateUserDto): Promise<IUser> {
        const existingUser = await this.userModel.findOne({ email: userDto.email }).exec();
        if (existingUser) {
            throw new ConflictException(`User with email ${userDto.email} already exists.`);
        }

        const user = new this.userModel({
            ...userDto,
        });

        return await user.save();
    }

    async findByEmail(email: string): Promise<IUser | null> {
        return await this.userModel.findOne({ email }).exec()
    }

    async findById(id: string) {
        return await this.userModel.findById(id).exec()
    }

    async findAll(): Promise<IUser[]> {
        return await this.userModel.find()
    }

    async delete(id: string) {
        return await this.userModel.findByIdAndDelete(id)
    }
}
