import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTagDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
}
