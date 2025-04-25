import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { FilterQuery, Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interface/user.interface';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { GetUsersFilterDto } from './dto/get-users.dto';
import { IFilter } from 'src/common/types/filter';
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
    async update(id: string, userDto: UpdateUserDto): Promise<IUser | null> {
        return await this.userModel.findByIdAndUpdate(id, {
            $set: userDto
        }, { new: true })
    }
    async findByEmail(email: string): Promise<IUser | null> {
        return await this.userModel.findOne({ email }).populate('department', 'name _id')
    }

    async findById(id: string) {
        return await this.userModel.findById(id).populate('department', 'name _id')
    }
    filter(args: GetUsersFilterDto): IFilter{
        return {
            ...args.phone && { phone: args.phone },
            ...args.department && { department: args.department },
            ...args.email && { email: args.email },
            ...args.searchTerm && {
                $or: [
                    { name: { $regex: args.searchTerm, $options: 'i' } },
                    { phone: { $regex: args.searchTerm, $options: 'i' } },
                    { email: { $regex: args.searchTerm, $options: 'i' } },
                ],
            },
        }
    }
    async findAll(filters: IFilter): Promise<IUser[]> {
        return await this.userModel.find(filters).populate('department', 'name _id')
    }

    async delete(id: string) {
        if (!await this.userModel.findById(id))
            throw new NotFoundException('User Not Found')

        return await this.userModel.findByIdAndDelete(id)
    }
}
