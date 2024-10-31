import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findListUsers(): Promise<User[]> {
    return await this.usersService.findListUsers();
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return await this.usersService.createUser(user);
  }

  @Put(':userId')
  async updateUserTag(): Promise<object> {
    return this.usersService.testUser();
  }

  @Patch(':userId')
  async updateUserPartial(): Promise<object> {
    return this.usersService.testUser();
  }

  @Get(':userId')
  async findOneUser(@Param('userId') userId: string): Promise<User> {
    const user = await this.usersService.findOneUser(userId);
    return user;
  }

  @Delete(':userId')
  async deleteUser(@Param('userId') userId: string): Promise<void> {
    await this.usersService.deleteUser(userId);
  }
}
