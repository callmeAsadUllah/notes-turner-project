import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
