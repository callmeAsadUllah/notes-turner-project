import { IsOptional, IsString } from 'class-validator';

export class SearchNotesDTO {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsString({ each: true })
  tags?: string[];
}
