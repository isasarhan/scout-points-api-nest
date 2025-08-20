import { Injectable, Logger } from '@nestjs/common';
import { S3Client, PutObjectCommand, DeleteObjectCommand, ListObjectsV2Command, ListBucketsCommand } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';
import { Readable } from 'stream';
import * as path from 'path';
import { randomUUID } from 'crypto';
import { streamToBuffer } from 'src/utilities/upload';
import * as fs from 'fs'

@Injectable()
export class UploadService {
    private readonly s3Client: S3Client;
    private readonly bucketName: string;
    private readonly logger = new Logger(UploadService.name);

    constructor(private configService: ConfigService) {

        const digitalOceanSpacesConfig = this.configService.get('digitalOceanSpaces');
        const doSpacesKey = digitalOceanSpacesConfig?.key;
        const doSpacesSecret = digitalOceanSpacesConfig?.secret;
        const doSpacesEndpoint = digitalOceanSpacesConfig?.endpoint;
        const doSpacesRegion = digitalOceanSpacesConfig?.region;
        this.bucketName = digitalOceanSpacesConfig?.bucket;

        this.s3Client = new S3Client({
            endpoint: doSpacesEndpoint,
            region: doSpacesRegion,
            credentials: {
                accessKeyId: doSpacesKey,
                secretAccessKey: doSpacesSecret,
            },
            forcePathStyle: true,
        });
    }

    async getImageList(quantity: number = 80) {

        const result = await this.s3Client.send(new ListObjectsV2Command({
            Bucket: this.bucketName,
            MaxKeys: quantity
        }));

        return result.Contents?.filter(({ Key }) => Key?.charAt(Key.length - 1) !== '/')
            .map(({ Key }) => `https://scout-app-bucket.sfo3.digitaloceanspaces.com/${Key}`)
    }

    async upload(buffer: Buffer, filename: string, mimetype: string, folder: string = 'uploads') {
        const ext = path.extname(filename);
        const key = `${folder}/${randomUUID()}${ext}`;
        
        await this.s3Client.send(new PutObjectCommand(
            {
                Bucket: this.bucketName,
                Key: key,
                Body: buffer,
                ContentType: mimetype,
                ContentLength: buffer.length,
                ACL: 'public-read'
            }
        ));

        return `https://scout-app-bucket.sfo3.digitaloceanspaces.com/${key}`;
    }
    
    stringToStream(text: string): Readable {
        return Readable.from([text])
    }

    async deleteImage(url: string): Promise<boolean> {
        const result = await this.s3Client.send(new DeleteObjectCommand({
            Bucket: this.bucketName,
            Key: url.split('https://scout-app-bucket.sfo3.digitaloceanspaces.com/')[1]
        }));
        return !!result

    }
    async uploadFile(file: Express.Multer.File) {
        const { stream, originalname, mimetype , buffer} = file;
        return await this.upload(buffer, originalname, mimetype);
    }

    // async uploadCsv(filePath: string, filename: string) {
    //     const stream = fs.createReadStream(filePath)
    //     return await this.upload(stream, filename, 'text/csv');
    // }
}