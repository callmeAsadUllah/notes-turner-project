import {
  Controller,
  Post,
  Body,
  Get,
  NotImplementedException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { CreateUserDto } from 'src/users/create-user.dto';
import { User } from 'src/users/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.authService.register(createUserDto);
  }

  @Post('login')
  async authenticate(@Body() ): Promise<AuthResult> {
    return await this.authService.authenticate(authInput);
  }

  // @UseGuards(AuthGuard)
  // @Get('me')
  // async findMe(@Request() request): Promise<void> {
  //   return await request.user;
  // }
}
