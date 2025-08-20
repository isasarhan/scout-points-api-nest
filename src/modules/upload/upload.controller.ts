import { Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
     constructor(
        private readonly service: UploadService
    ) { }

    @Get()
    getImages(@Query() quantity: number) {
        return this.service.getImageList(quantity);
    }

    // @Post()
    // uploadImage(@Args() args: UploadArgs) {
    //     return this.service.uploadFile(args);
    // }

    // @Delete()
    // deleteImage(@Args('url', { type: () => String }) url: string) {
    //     return this.service.deleteImage(url);
    // }
}
