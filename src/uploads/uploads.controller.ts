import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UploadsService } from './uploads.service';

@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new Error('File not provided');
    }

    console.log(file.buffer);

    return {
      message: 'File uploaded successfully',
      filename: file.originalname,
    };
  }

  @Post('files')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    if (!files || files.length === 0) {
      throw new Error('No files uploaded.');
    }
    const filePaths = await this.uploadsService.uploadFiles(files);
    return {
      message: 'Files uploaded successfully!',
      filePaths,
    };
  }
}
