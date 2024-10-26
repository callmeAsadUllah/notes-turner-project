import { IsString, IsArray, IsOptional } from 'class-validator';

import { UpdateNoteDTO } from '../notes/update-note.dto';

export class UpdateTagDTO {
  @IsString()
  @IsOptional()
  name?: string;

  @IsArray()
  @IsOptional()
  notes?: UpdateNoteDTO[];
}
