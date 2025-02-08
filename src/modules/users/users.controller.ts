import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from './interface/user.interface';

@UseGuards(RolesGuard)
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return await this.userService.findById(id)
    }

    @Roles(Role.ADMIN)
    @Get()
    async findAll() {
        return await this.userService.findAll()
    }
}
