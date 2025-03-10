import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from './interface/user.interface';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@UseGuards(RolesGuard)
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Get(':id')
    async findById(@Param() params: GetUserDto) {
        return await this.userService.findById(params.id)
    }

    @Roles(Role.ADMIN)
    @Get()
    async findAll() {
        return await this.userService.findAll()
    }
    @Roles()
    @Post('add')
    async add(@Body() createUserDto: CreateUserDto) {
        return await this.userService.create(createUserDto)
    }
    
    @Roles(Role.ADMIN)
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return await this.userService.update(id, updateUserDto)
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async delete(@Param('id') id: GetUserDto) {
        return await this.userService.delete(id);
    }
}
