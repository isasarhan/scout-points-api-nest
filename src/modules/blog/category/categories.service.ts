import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BlogCategory } from './category.schema';
import { Model } from 'mongoose';
import { CreateBlogCategoryArgs } from './dto/create-blog-category.dto';
import { UpdateBlogCategoryArgs } from './dto/update-blog-category.dto';

@Injectable()
export class BlogCategoriesService {
    constructor(
        @InjectModel(BlogCategory.name) private model: Model<BlogCategory>
    ) { }

    async create(dto: CreateBlogCategoryArgs) {
        const newCategory = new this.model(dto);
        return newCategory.save();
    }

    async findById(id: string) {
        const categoryExists = await this.model.findById(id)
        if (!categoryExists) {
            throw new NotFoundException('Category was not found!');
        }
        return categoryExists
    }

    async findAll() {
        return await this.model.find()
    }

    async update(dto: UpdateBlogCategoryArgs) {
        // integrated deleting an image from s3        
        const { id, ...category } = dto
        const updated = await this.model.findByIdAndUpdate(id, {
            $set: {
                ...category
            }
        }, { new: true })

        if (!updated) {
            throw new NotFoundException('Category was not found!');
        }
        return updated
    }

    async remove(id: string) {
        const deleted = await this.model.findByIdAndDelete(id)
        if (!deleted) {
            throw new NotFoundException('Category was not found!');
        }
        return deleted
    }
}
