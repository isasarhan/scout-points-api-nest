import { Body, Controller, Delete, Get, Param, Post, Put, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { GetBlogsArgs } from './dto/get-blogs.dto';
import { BlogService } from './blog.service';
import { UploadService } from '../upload/upload.service';
import { GetBlogArgs } from './dto/get-blog.dto';
import { CreateBlogArgs } from './dto/create-blog';
import { UpdateBlogArgs } from './dto/update-blog.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('blogs')
export class BlogController {
    constructor(
        private readonly service: BlogService,
        private readonly uploadService: UploadService,

    ) { }

    @Get()
    getBlogs(@Query() dto: GetBlogsArgs) {
        const filter = this.service.filter(dto)
        return this.service.findAll(filter, dto?.page, dto?.pageSize)
    }

    @Get(':id')
    getBlog(@Param('id') id: string) {
        return this.service.findById(id)
    }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'featuredImage', maxCount: 1 },
        { name: 'coverImage', maxCount: 1 },
    ],))

    async createBlog(
        @UploadedFiles() files: { featuredImage?: Express.Multer.File[], coverImage?: Express.Multer.File[] },
        @Body() args: CreateBlogArgs) {
        let cover = '', featured = '';
        const { coverImage, featuredImage } = files

        if (coverImage || featuredImage) {
            if (coverImage)
                cover = await this.uploadService.uploadFile(coverImage[0])

            if (featuredImage)
                featured = await this.uploadService.uploadFile(featuredImage[0])

            return this.service.create({ ...args, coverImage: cover, featuredImage: featured })
        }

        return this.service.create({ ...args })
    }

    @Put(':id')
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'featuredImage', maxCount: 1 },
        { name: 'coverImage', maxCount: 1 },
    ],))
    async updateBlog(
        @Param('id') id: string,
        @UploadedFiles() files: { featuredImage?: Express.Multer.File[], coverImage?: Express.Multer.File[] },
        @Body() args: UpdateBlogArgs) {
            
        const { coverImage, featuredImage } = files
        if (coverImage || featuredImage) {
            let cover: string | undefined;
            let featured: string | undefined;

            if (coverImage) {
                cover = await this.uploadService.uploadFile(coverImage[0]);
            }

            if (featuredImage) {
                featured = await this.uploadService.uploadFile(featuredImage[0]);
            }

            return this.service.update(id, {
                ...args,
                ...(cover && { coverImage: cover }),
                ...(featured && { featuredImage: featured }),
            });
        }

        return this.service.update(id, { ...args })
    }

    @Delete(':id')
    async removeBlog(@Param('id') id: string) {
        return this.service.remove(id)
    }
}
