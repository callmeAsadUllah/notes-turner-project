import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import { join } from 'path';

@Injectable()
export class UploadsService {
  async uploadFile(file: Express.Multer.File): Promise<object> {
    console.log(file);
    return {
      message: 'File uploaded successfully!',
      filename: file.filename,
      filepath: file.path,
    };
  }

  async uploadFiles(files: Array<Express.Multer.File>): Promise<string[]> {
    const filePaths: string[] = [];

    for (const file of files) {
      if (!file || !file.buffer) {
        throw new Error('File buffer is undefined.');
      }

      const filePath = join(__dirname, '..', '..', 'uploads', file.filename);
      filePaths.push(filePath);
      await fs.writeFile(filePath, file.buffer);
    }

    return filePaths;
  }
}
