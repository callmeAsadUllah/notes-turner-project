import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateNoteDTO {
  @IsOptional()
  @IsString()
  title?: string;

  @IsNotEmpty()
  @IsString()
  content: string;
}
