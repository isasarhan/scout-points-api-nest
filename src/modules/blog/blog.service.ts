import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlogArgs } from './dto/create-blog';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateBlogArgs } from './dto/update-blog.dto';
import { BLOG_NOT_FOUND } from 'src/messages';
import { GetBlogsArgs } from './dto/get-blogs.dto';
import { Types } from 'mongoose'
import { IFilter } from 'src/common/types/filter';
import { Blog } from './schema/blog.schema';

@Injectable()
export class BlogService {
    constructor(
        @InjectModel(Blog.name) private model: Model<Blog>
    ) { }

    async create(dto: CreateBlogArgs) {
        const blog = new this.model(dto);
        return blog.save()
    }

    async update(id: string, dto: UpdateBlogArgs) {
        const { ...blog } = dto
        const updated = await this.model.findByIdAndUpdate(
            id,
            { $set: { ...blog } },
            { new: true })

        if (!updated)
            throw new NotFoundException(BLOG_NOT_FOUND)

        return updated
    }

    filter(filter: GetBlogsArgs) {
        let categoryIds: Types.ObjectId[] = []
        
        if (filter?.categories)
            categoryIds = filter.categories.map(id => new Types.ObjectId(id));

        return {
            ...filter.categories && filter.categories.length > 0 && { categories: { $in: categoryIds } },
        }
    }

    async findAll(filters: IFilter, page: number = 1, limit: number = 20) {
        const finalLimit = filters.pageSize || limit;

        const skip = (page - 1) * finalLimit;

        const [blogs, total] = await Promise.all([
            this.model.find(filters).limit(finalLimit).skip(skip).exec(),
            this.model.countDocuments(filters),
        ]);

        return {
            data: blogs,
            total,
            page,
            pages: Math.ceil(total / finalLimit),
        };
    }

    async findById(id: string) {
        const blog = await this.model.findById(id)
        if (!blog)
            throw new NotFoundException(BLOG_NOT_FOUND)

        return blog
    }

    async remove(id: string) {
        const deleted = await this.model.findByIdAndDelete(id)
        if (!deleted) {
            throw new NotFoundException(BLOG_NOT_FOUND);
        }
        return deleted
    }

}
