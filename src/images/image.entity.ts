// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   UpdateDateColumn,
//   CreateDateColumn,
// } from 'typeorm';
//
// import { IImage } from './image.interface';
//
// @Entity({ name: 'images' })
// export class Image implements IImage {
//   @PrimaryGeneratedColumn('uuid', { name: 'image_id' })
//   imageID: string;
//
//   @Column('text', { name: 'url' })
//   url: string;
//
//   @CreateDateColumn({ name: 'created_at' })
//   createdAt: Date;
//
//   @UpdateDateColumn({ name: 'updated_at' })
//   updatedAt: Date;
// }
