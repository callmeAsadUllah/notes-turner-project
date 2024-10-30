import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findUsers(): Promise<User[] | null> {
    return await this.userService.findUsers();
  }

  @Get(':userId')
  async findOneUser(@Param('userId') userId: string): Promise<User | null> {
    return await this.userService.findOneUser(userId);
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return await this.userService.createUser(user);
  }

  @Delete(':userId')
  async deleteUser(@Param('userId') userId: string): Promise<void> {
    await this.userService.deleteUser(userId);
  }
}
