import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { DepartmentsService } from './departments.service'
import { Roles } from 'src/common/decorators/roles.decorator'
import { Role } from '../users/interface/user.interface'
import { CreateDepartmentDto } from './dto/create-department.dto'
import { UpdateDepartmentDto } from './dto/update-department.dto'

@Controller('departments')
export class DepartmentsController {
    constructor(private departmentService: DepartmentsService) { }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return await this.departmentService.findById(id)
    }

    @Roles(Role.ADMIN)
    @Get()
    async findAll() {
        return await this.departmentService.findAll()
    }
    
    @Roles(Role.ADMIN)
    @Post('add')
    async add(@Body() createDepartmentDto: CreateDepartmentDto) {
        return await this.departmentService.create(createDepartmentDto)
    }
    
    @Roles(Role.ADMIN)
    @Put('update')
    async update(@Body() updateDepartmentDto: UpdateDepartmentDto) {
        return await this.departmentService.update(updateDepartmentDto)
    }
    
    @Roles(Role.ADMIN)
    @Delete('delete')
    async delete(@Body() id: string) {
        return await this.departmentService.delete(id)
    }

}
