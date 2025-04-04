import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Association } from './schema/association.schema';
import { Model } from 'mongoose';
import { CreateAchievementDto } from '../achievements/dto/create-achievement.dto';
import { UpdateAchievementDto } from '../achievements/dto/update-achievement.dto';
import { IAchievement } from '../achievements/interface/achievements.interface';
import { CreateAssociationDto } from './dto/create-association.dto';
import { UpdateAssociationDto } from './dto/update-association.dto';
import { IAssociation } from './interface/association.interface';

@Injectable()
export class AssociationsService {
    constructor(@InjectModel(Association.name) private associationModel: Model<Association>) { }

    async create(associationDto: CreateAssociationDto) {
        const association = new this.associationModel({ ...associationDto })
        return await association.save()
    }

    async update(id:string, associationDto: UpdateAssociationDto): Promise<IAssociation | null> {
        return await this.associationModel.findByIdAndUpdate(id, {
            $set: associationDto
        }, { new: true })
    }

    async findById(id: string) {
        return await this.associationModel.findById(id).exec()
    }

    async findAll(): Promise<IAssociation[]> {
        return await this.associationModel.find()
    }

    async delete(id: string) {
        return await this.associationModel.findByIdAndDelete(id)
    }
}
