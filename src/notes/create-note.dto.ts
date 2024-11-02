import { IsString, IsNotEmpty, IsOptional, IsArray } from 'class-validator';

import { CreateTagDTO } from '../tags/create-tag.dto';

export class CreateNoteDTO {
  @IsOptional()
  @IsString()
  title?: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsOptional()
  @IsArray()
  tags?: CreateTagDTO[];
}
