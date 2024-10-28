import { IsNotEmpty } from 'class-validator';

export class UploadFileDTO {
  @IsNotEmpty()
  file: Express.Multer.File;
}
