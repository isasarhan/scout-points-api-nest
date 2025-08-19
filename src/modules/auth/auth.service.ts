import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common"
import { UsersService } from "../users/users.service"
import * as jwt from 'jsonwebtoken'
import { CreateUserDto } from "../users/dto/create-user.dto"
import { IUser } from "../users/interface/user.interface"
import { CreateAccountDto, CreateUserAccountDto } from "./dto/create-account.dto"
import { Account } from "./schema/account.schema"
import { Model } from "mongoose"
import { InjectModel } from "@nestjs/mongoose"
import { GetAccountDto } from "./dto/get-account.dto"
import { UpdateAccountDto } from "./dto/update-account.dto"
import { IAccount } from "./interface/auth.interface"

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(Account.name) private model: Model<Account>,
        private usersService: UsersService) { }

    async register(accountDto: CreateUserAccountDto) {
        const { username, password, isSuperAdmin, role, isApproved, ...userDto } = accountDto

        const existingUser = await this.model.findOne({ username: accountDto.username || userDto.email }).exec();
        if (existingUser) {
            throw new ConflictException(`User with username ${accountDto.username} already exists.`);
        }

        const user = await this.usersService.create(userDto)

        const account = await this.add({
            user: user._id,
            username: username ?? userDto.email,
            password,
            isSuperAdmin,
            role,
            isApproved
        })
        return account;
    }

    async add(accoutnDto: CreateAccountDto) {
        const existingUser = await this.model.findOne({ username: accoutnDto.username }).exec();
        if (existingUser) {
            throw new ConflictException(`User with username ${accoutnDto.username} already exists.`);
        }

        const user = new this.model({
            ...accoutnDto,
        });

        return await user.save();
    }
    async update(id: string, departmentDto: UpdateAccountDto): Promise<IAccount | null> {
        return await this.model.findByIdAndUpdate(id, {
            $set: departmentDto
        }, { new: true })
    }

    async findById(id: string) {
        const account = await this.model.findById(id)
        if (!account)
            throw new NotFoundException('Account not found!')
        return account
    }

    async signIn(username: string, password: string) {
        const account = await this.model.findOne({ username })
        if (!account) {
            throw new NotFoundException('Account not found')
        }
        console.log('account', account);

        const isPasswordValid = account.matchPassword(password)

        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials')
        }
        const user = await this.usersService.findById(account.user)
        console.log('user', user);

        const token = this.generateJwtToken(account._id.toString())

        return { token, user, account }
    }

    private generateJwtToken(userId: string): string {
        const payload = { userId }
        return jwt.sign(payload, process.env.JWT_SECRET || 'secretjwt', { expiresIn: '1d' })
    }
}
