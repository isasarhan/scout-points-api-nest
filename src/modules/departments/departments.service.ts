import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Department } from './schema/departments.schema';
import { Model } from 'mongoose';
import { IDepartment } from './interface/department.interface';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UsersService } from '../users/users.service';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { GetDepartmentDto } from './dto/get-department.dto';

@Injectable()
export class DepartmentsService {
    constructor(@InjectModel(Department.name) private model: Model<Department>) { }

    async create(departmentDto: CreateDepartmentDto): Promise<IDepartment> {
        const existingUser = await this.model.findOne({ name: departmentDto.name }).exec();
        if (existingUser) {
            throw new ConflictException(`Department with name ${departmentDto.name} already exists.`);
        }
        const department = new this.model({
            ...departmentDto,
        });
        return await department.save();
    }

    async update(id: GetDepartmentDto, departmentDto: UpdateDepartmentDto): Promise<IDepartment | null> {
        return await this.model.findByIdAndUpdate(id, {
            $set: departmentDto
        }, { new: true })
    }

    async findByUsername(username: string): Promise<IDepartment | null> {
        return await this.model.findOne({ username: username }).populate('manager').exec()
    }

    async findById(id : string) {
        return await this.model.findById(id).exec()
    }

    async findAll(): Promise<IDepartment[]> {
        return await this.model.find()
    }

    async delete(id: string) {
        return await this.model.findByIdAndDelete(id)
    }
}
