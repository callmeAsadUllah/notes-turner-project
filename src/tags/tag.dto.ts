import { IsString, IsArray, IsOptional, IsDate } from 'class-validator';

import { NoteDTO } from '../notes/note.dto';

export class TagDTO {
  @IsString()
  tagID: string;

  @IsString()
  name: string;

  @IsArray()
  @IsOptional()
  notes?: NoteDTO[];

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
