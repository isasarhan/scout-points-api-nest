import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common"
import { UsersService } from "../users/users.service"
import * as jwt from 'jsonwebtoken'
import { CreateUserDto } from "../users/dto/create-user.dto"
import { IUser } from "../users/interface/user.interface"

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) { }

    async register(userDto: CreateUserDto): Promise<IUser> {
        return await this.usersService.create(userDto)
    }

    async signIn(email: string, password: string) {
        const user = await this.usersService.findByEmail(email)
        if (!user) {
            throw new NotFoundException('User not found')
        }

        const isPasswordValid = user.matchPassword(password)

        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials')
        }

        const token = this.generateJwtToken(user._id as string)

        return { token , user}
    }

    private generateJwtToken(userId: string): string {
        const payload = { userId }
        return jwt.sign(payload, process.env.JWT_SECRET || 'secretjwt', { expiresIn: '1h' })
    }
}
