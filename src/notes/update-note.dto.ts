import { IsString, IsOptional, IsArray } from 'class-validator';

import { UpdateTagDTO } from '../tags/update-tag.dto';

export class UpdateNoteDTO {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsArray()
  @IsOptional()
  tags?: UpdateTagDTO[];
}
