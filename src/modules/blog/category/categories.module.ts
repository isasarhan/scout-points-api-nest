import { Module } from '@nestjs/common';
import { BlogCategoryController } from './categories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogCategorySchema, BlogCategory } from './category.schema';
import { BlogCategoriesService } from './categories.service';
import { UploadModule } from 'src/modules/upload/upload.module';

@Module({
  imports: [
    UploadModule,
    MongooseModule.forFeature([{
      name: BlogCategory.name,
      schema: BlogCategorySchema
    }]),
  ],
  controllers: [BlogCategoryController],
  providers: [
    BlogCategoriesService
  ],
  exports: [BlogCategoriesService]
})
export class BlogCategoriesModule { }
