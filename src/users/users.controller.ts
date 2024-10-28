import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDTO } from './create-user.dto';
import { UpdateUserDTO } from './update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('log-in')
  async logIn(): Promise<string[]> {
    return this.usersService.logIn();
  }

  @Get('register')
  async register(): Promise<string[]> {
    return this.usersService.register();
  }

  @Get('log-out')
  async logOut(): Promise<string[]> {
    return this.usersService.logOut();
  }

  @Post()
  async create(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    return this.usersService.create(createUserDTO);
  }

  @Put(':userID')
  async updateUser(
    @Param('userID') userID: string,
    @Body() updateUserDTO: UpdateUserDTO,
  ): Promise<User> {
    return this.usersService.updateUser(userID, updateUserDTO);
  }

  @Get()
  async find(): Promise<User[]> {
    return this.usersService.find();
  }

  @Get(':userID')
  async findOne(@Param('userID') userID: string): Promise<User> {
    return await this.usersService.findOne(userID);
  }
  // @Get(':userID/profile')
  // async findOne(@Param('userID') userID: string): Promise<User> {
  //   return await this.usersService.findOne(userID);
  // }
}
