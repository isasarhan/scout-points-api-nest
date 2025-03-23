import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Roles } from 'src/common/decorators/roles.decorator'
import { Role } from '../users/interface/user.interface'
import { EventsService } from './events.service'
import { GetEventDto } from './dto/get-event.dto'
import { CreateEventDto } from './dto/create-event.dto'
import { UpdateEventDto } from './dto/update-event.dto'
import { GetDepartmentDto } from '../departments/dto/get-department.dto'


@Controller('events')
export class EventsController {
    constructor(private eventService: EventsService) { }

    @Get(':id')
    async findById(@Param() params: GetEventDto) {
        return await this.eventService.findById(params.id)
    }

    @Roles(Role.ADMIN)
    @Get()
    async findAll() {
        return await this.eventService.findAll()
    }
    
    @Roles(Role.ADMIN)
    @Post('add')
    async add(@Body() createDepartmentDto: CreateEventDto) {
        return await this.eventService.create(createDepartmentDto)
    }
    
    @Roles(Role.ADMIN)
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateEventDto) {
        return await this.eventService.update(id, updateDepartmentDto)
    }
    
    @Roles(Role.ADMIN)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.eventService.delete(id)
    }

}
