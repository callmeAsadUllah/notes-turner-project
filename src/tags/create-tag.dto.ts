import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTagDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
}
