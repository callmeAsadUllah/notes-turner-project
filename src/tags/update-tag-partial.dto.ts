import { IsString, IsOptional } from 'class-validator';

export class UpdateTagPartialDTO {
  @IsOptional()
  @IsString()
  name?: string;
}
