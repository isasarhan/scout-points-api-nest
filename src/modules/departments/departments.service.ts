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
    constructor(@InjectModel(Department.name) private departmentModel: Model<Department>) { }

    async create(departmentDto: CreateDepartmentDto): Promise<IDepartment> {
        const existingUser = await this.departmentModel.findOne({ username: departmentDto.username }).exec();
        if (existingUser) {
            throw new ConflictException(`Department with username ${departmentDto.username} already exists.`);
        }
        const department = new this.departmentModel({
            ...departmentDto,
        });
        return await department.save();
    }

    async update(id: GetDepartmentDto, departmentDto: UpdateDepartmentDto): Promise<IDepartment | null> {
        return await this.departmentModel.findByIdAndUpdate(id, {
            $set: departmentDto
        }, { new: true })
    }

    async findByUsername(username: string): Promise<IDepartment | null> {
        return await this.departmentModel.findOne({ username: username }).populate('manager').exec()
    }

    async findById(id : string) {
        return await this.departmentModel.findById(id).exec()
    }

    async findAll(): Promise<IDepartment[]> {
        return await this.departmentModel.find()
    }

    async delete(id: GetDepartmentDto) {
        return await this.departmentModel.findByIdAndDelete(id)
    }
}
