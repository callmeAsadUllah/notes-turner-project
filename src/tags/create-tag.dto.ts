import { IsString, IsNotEmpty, IsArray, IsOptional } from 'class-validator';

import { CreateNoteDTO } from '../notes/create-note.dto';

export class CreateTagDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @IsOptional()
  notes?: CreateNoteDTO[];
}
