import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return await this.userService.findById(id)
    }

    @Get()
    async findAll() {
        return await this.userService.findAll()
    }
}
