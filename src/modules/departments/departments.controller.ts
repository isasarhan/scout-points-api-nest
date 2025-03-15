import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { DepartmentsService } from './departments.service'
import { Roles } from 'src/common/decorators/roles.decorator'
import { Role } from '../users/interface/user.interface'
import { CreateDepartmentDto } from './dto/create-department.dto'
import { UpdateDepartmentDto } from './dto/update-department.dto'
import { GetDepartmentDto } from './dto/get-department.dto'

@Controller('departments')
export class DepartmentsController {
    constructor(private departmentService: DepartmentsService) { }

    @Get(':id')
    async findById(@Param() params: GetDepartmentDto) {
        return await this.departmentService.findById(params.id)
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
    @Put(':id')
    async update(@Param('id') id: GetDepartmentDto, @Body() updateDepartmentDto: UpdateDepartmentDto) {
        return await this.departmentService.update(id, updateDepartmentDto)
    }
    
    @Roles(Role.ADMIN)
    @Delete(':id')
    async delete(@Param('id') id: GetDepartmentDto) {
        return await this.departmentService.delete(id)
    }

}
