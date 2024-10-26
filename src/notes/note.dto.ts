import { IsString, IsDate, IsArray, IsOptional } from 'class-validator';

import { TagDTO } from '../tags/tag.dto';

export class NoteDTO {
  @IsString()
  noteID: string;

  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsArray()
  @IsOptional()
  tags?: TagDTO[];

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
