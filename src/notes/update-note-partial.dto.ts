import { IsString, IsOptional } from 'class-validator';

export class UpdateNotePartialDTO {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;
}
