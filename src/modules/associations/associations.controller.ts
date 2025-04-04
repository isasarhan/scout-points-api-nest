import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AssociationsService } from './associations.service';
import { GetAsssociationDto } from './dto/get-association.dto';
import { Role } from '../users/interface/user.interface';
import { Roles } from 'src/common/decorators/roles.decorator';
import { CreateAssociationDto } from './dto/create-association.dto';
import { UpdateAssociationDto } from './dto/update-association.dto';

@Controller('associations')
export class AssociationsController {
    constructor(private associationService: AssociationsService) { }

    @Get(':id')
    async findById(@Param() params: GetAsssociationDto) {
        return await this.associationService.findById(params.id)
    }

    @Get()
    async findAll() {
        return await this.associationService.findAll()
    }

    @Roles(Role.ADMIN)
    @Post('add')
    async add(@Body() createDepartmentDto: CreateAssociationDto) {
        return await this.associationService.create(createDepartmentDto)
    }

    @Roles(Role.ADMIN)
    @Put(':id')
    async update(@Param('id') { id }: GetAsssociationDto, @Body() updateAssociationDto: UpdateAssociationDto) {
        return await this.associationService.update(id, updateAssociationDto)
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async delete(@Param('id') { id }: GetAsssociationDto) {
        return await this.associationService.delete(id)
    }

}
