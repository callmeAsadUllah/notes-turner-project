```

# Uploads

`
// image.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Image {
@PrimaryGeneratedColumn()
id: number;

@Column()
url: string; // Store the image URL or path
}
npm install @nestjs/platform-express multer
// upload.module.ts
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './image.entity';

@Module({
imports: [
TypeOrmModule.forFeature([Image]),
MulterModule.register({
dest: './uploads', // Destination folder for uploaded files
}),
],
controllers: [ImageController],
providers: [ImageService],
})
export class UploadModule {}
// image.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './image.entity';

@Injectable()
export class ImageService {
constructor(
@InjectRepository(Image)
private readonly imageRepository: Repository`<Image>`,
) {}

async saveImage(url: string): Promise`<Image>` {
const image = this.imageRepository.create({ url });
return this.imageRepository.save(image);
}
}
// image.controller.ts
import { Controller, Post, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';
import { Response } from 'express';
import \* as path from 'path';

@Controller('images')
export class ImageController {
constructor(private readonly imageService: ImageService) {}

@Post('upload')
@UseInterceptors(FileInterceptor('file'))
async uploadFile(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
if (!file) {
return res.status(400).send('No file uploaded.');
}

    const imageUrl = path.join('uploads', file.filename); // Adjust URL as needed
    const savedImage = await this.imageService.saveImage(imageUrl);

    return res.status(201).json(savedImage);

}
}
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
const app = await NestFactory.create`<NestExpressApplication>`(AppModule);

app.useStaticAssets(join(\_\_dirname, '..', 'uploads'), {
prefix: '/uploads/', // Adjust the prefix if needed
});

await app.listen(3000);
}
bootstrap();
Summary
This setup allows you to upload images to your NestJS application and store their paths in a database using TypeORM. Make sure to adjust the paths and settings according to your project's needs.

// image.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Image {
@PrimaryGeneratedColumn()
id: number;

@Column()
url: string;

@Column()
description: string; // Add a description for search purposes
}
// image.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './image.entity';

@Injectable()
export class ImageService {
constructor(
@InjectRepository(Image)
private readonly imageRepository: Repository`<Image>`,
) {}

async searchImages(term: string): Promise<Image[]> {
return this.imageRepository.createQueryBuilder('image')
.where('image.description LIKE :term', { term: `%${term}%` })
.getMany();
}
}
// image.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { ImageService } from './image.service';
import { Image } from './image.entity';

@Controller('images')
export class ImageController {
constructor(private readonly imageService: ImageService) {}

@Get('search')
async search(@Query('term') term: string): Promise<Image[]> {
return this.imageService.searchImages(term);
}
}
// image.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './image.entity';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';

@Module({
imports: [TypeOrmModule.forFeature([Image])],
providers: [ImageService],
controllers: [ImageController],
})
export class ImageModule {}
// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageModule } from './image/image.module';

@Module({
imports: [
TypeOrmModule.forRoot({
// Your TypeORM configuration here
}),
ImageModule,
],
})
export class AppModule {}
Step 6: Testing Your Search
You can test the search functionality by sending a GET request to /images/search?term=yourSearchTerm. This will return all images that contain the search term in their description.

Summary
This simple search module provides a way to search for images based on a keyword in their descriptions. You can enhance this by adding pagination, filtering, or more advanced search capabilities as needed.

To enhance the search capabilities in your Image entity, consider adding the following fields:

Description: A text field where you can provide a description of the image. This is the most common field for search functionality.

Tags: An array of keywords or tags related to the image. This can help with more refined searches.

Title: A field for a short title or name for the image, which can also be searchable.

Category: If your images fall under specific categories (like "Nature," "Architecture," etc.), this can help in filtering search results.

CreatedAt: A timestamp field indicating when the image was uploaded, allowing for sorting or filtering by date.
// image.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Image {
@PrimaryGeneratedColumn()
id: number;

@Column()
url: string;

@Column()
description: string;

@Column({ nullable: true })
title: string; // Optional title

@Column("simple-array", { nullable: true }) // To store tags as an array
tags: string[];

@Column({ nullable: true })
category: string; // Optional category

@CreateDateColumn() // Automatically set the date when the record is created
createdAt: Date;
}
// image.service.ts
async searchImages(term: string): Promise<Image[]> {
return this.imageRepository.createQueryBuilder('image')
.where('image.description LIKE :term', { term: `%${term}%` })
.orWhere('image.title LIKE :term', { term: `%${term}%` })
.orWhere('image.tags ILIKE :term', { term: `%${term}%` }) // PostgreSQL case-insensitive
.getMany();
}
// image.service.ts
async searchImages(term: string): Promise<Image[]> {
return this.imageRepository.createQueryBuilder('image')
.where('image.description LIKE :term', { term: `%${term}%` })
.orWhere('image.title LIKE :term', { term: `%${term}%` })
.orWhere('image.tags ILIKE :term', { term: `%${term}%` }) // PostgreSQL case-insensitive
.getMany();
}
// image.interface.ts
export interface IImage {
tagID: string; // UUID for the image ID
url: string; // URL of the image
createdAt: Date; // Date when the image was created
updatedAt: Date; // Date when the image was last updated
}
// image.interface.ts
export interface IImage {
tagID: string; // UUID for the image ID
url: string; // URL of the image
createdAt: Date; // Date when the image was created
updatedAt: Date; // Date when the image was last updated
}
async getImages(): Promise<IImage[]> {
return await this.imageRepository.find();
}
// image.entity.ts
import {
Entity,
PrimaryGeneratedColumn,
Column,
UpdateDateColumn,
CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'images' })
export class Image {
@PrimaryGeneratedColumn('uuid')
id: string;

@Column({ type: 'blob' }) // Define the BLOB field
data: Buffer;

@CreateDateColumn({ name: 'created_at' })
createdAt: Date;

@UpdateDateColumn({ name: 'updated_at' })
updatedAt: Date;
}
// image.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './image.entity';

@Injectable()
export class ImageService {
constructor(
@InjectRepository(Image)
private readonly imageRepository: Repository`<Image>`,
) {}

async saveImage(data: Buffer): Promise`<Image>` {
const image = this.imageRepository.create({ data });
return this.imageRepository.save(image);
}

async getImage(id: string): Promise`<Image>` {
return this.imageRepository.findOne(id);
}
}
// image.controller.ts
import { Controller, Post, UseInterceptors, UploadedFile, Get, Param, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';
import { Response } from 'express';

@Controller('images')
export class ImageController {
constructor(private readonly imageService: ImageService) {}

@Post('upload')
@UseInterceptors(FileInterceptor('file'))
async uploadFile(@UploadedFile() file: Express.Multer.File) {
const image = await this.imageService.saveImage(file.buffer);
return { id: image.id }; // Return the ID of the saved image
}

@Get(':id')
async getImage(@Param('id') id: string, @Res() res: Response) {
const image = await this.imageService.getImage(id);
if (image) {
res.set('Content-Type', 'image/jpeg'); // Adjust based on the image type
res.send(image.data);
} else {
res.status(404).send('Image not found');
}
}
}
// image.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './image.entity';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';

@Module({
imports: [TypeOrmModule.forFeature([Image])],
providers: [ImageService],
controllers: [ImageController],
})
export class ImageModule {}
// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageModule } from './image/image.module';

@Module({
imports: [
TypeOrmModule.forRoot({
type: 'sqlite',
database: 'database.sqlite',
entities: [Image],
synchronize: true, // Set to false in production
}),
ImageModule,
],
})
export class AppModule {}

`
```
