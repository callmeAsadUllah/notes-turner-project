import { IsString, IsOptional } from 'class-validator';

export class UpdateNoteDTO {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;
}
