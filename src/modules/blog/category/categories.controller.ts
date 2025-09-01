import { BlogCategoriesService } from './categories.service';
import { GetBlogCategoryArgs } from './dto/get-blog-category.dto';
import { UploadService } from 'src/modules/upload/upload.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateBlogCategoryArgs } from './dto/create-blog-category.dto';
import { UpdateBlogCategoryArgs } from './dto/update-blog-category.dto';

@Controller('blog-categories')
export class BlogCategoryController {
    constructor(
        private readonly service: BlogCategoriesService,
        private readonly uploadService: UploadService,

    ) { }

    @Get(':id')
    async getBlogCategoryById(@Param('id') id: string) {
        return this.service.findById(id)
    }

    @Get()
    async getBlogCategories() {
        return this.service.findAll()
    }

    @Post('add')
    async createBlogCategory(@Body() args: CreateBlogCategoryArgs) {
        // let image = ''
        // const { img, ...category } = args
        // if (img) {
        //     image = await this.uploadService.uploadFile({ file: img })
        //     return this.service.create({ ...category, img: image })
        // }
        return this.service.create({ ...args })
    }

    // async updateBlogCategory(@Body() args: UpdateBlogCategoryArgs) {
    //     // let image = ''
    //     // const { img, ...category } = args
    //     // if (img) {
    //     //     image = await this.uploadService.uploadFile({ file: img })
    //     //     return this.service.update({ ...category, img: image })
    //     // }
    //     // return this.service.update({ ...category })
    // }

    // async removeBlogCategory(@Param('id')  id : string) {
    //     return this.service.remove(id)
    // }
}
