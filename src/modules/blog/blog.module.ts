    import { Module } from '@nestjs/common';
    import { UsersModule } from '../users/users.module';
    import { UploadModule } from '../upload/upload.module';
    import { MongooseModule } from '@nestjs/mongoose';
    import { Blog, BlogSchema } from './schema/blog.schema';
    import { BlogService } from './blog.service';
    import { BlogController } from './blog.controller';

    @Module({
        imports: [
            UsersModule,
            UploadModule,
            MongooseModule.forFeature([{
                name: Blog.name,
                schema: BlogSchema
            }]),
        ],
        controllers: [BlogController],
        providers: [BlogService],
    })
    export class BlogModule { }
