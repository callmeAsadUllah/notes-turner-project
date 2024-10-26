import { IsString, IsNotEmpty, IsOptional, IsArray } from 'class-validator';

import { CreateTagDTO } from '../tags/create-tag.dto';

export class CreateNoteDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsArray()
  @IsOptional()
  tags?: CreateTagDTO[];
}
