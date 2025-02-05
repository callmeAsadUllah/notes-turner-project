import { IsString, IsOptional } from 'class-validator';

export class UpdateTagDTO {
  @IsOptional()
  @IsString()
  name?: string;
}
