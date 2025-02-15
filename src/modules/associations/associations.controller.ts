import { Controller, Get } from '@nestjs/common';
import { AssociationsService } from './associations.service';

@Controller('associations')
export class AssociationsController {
    constructor(private associationService: AssociationsService) { }

    @Get()
    async findAll() {
        return await this.associationService.findAll()
    }

}
