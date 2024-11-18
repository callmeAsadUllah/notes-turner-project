import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { IResponse } from 'src/common/interfaces/response.interface';
import { IUser } from '../common/interfaces/user.interface';
import {
  CreateUserDTO,
  UpdateUserDTO,
  UpdateUserPartialDTO,
} from 'src/common/dtos/user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async listUsers(): Promise<IResponse<IUser[]>> {
    return await this.usersService.listUsers();
  }

  @Post()
  async createUser(
    @Body() createUserDTO: CreateUserDTO,
  ): Promise<IResponse<IUser>> {
    return await this.usersService.createUser(createUserDTO);
  }

  @Get(':userId')
  async findOneById(
    @Param('userId') userId: string,
  ): Promise<IResponse<IUser>> {
    return await this.usersService.findOneById(userId);
  }

  @Put(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() updateUserDTO: UpdateUserDTO,
  ): Promise<IResponse<IUser>> {
    return await this.usersService.findOneByIdAndUpdateUser(
      userId,
      updateUserDTO,
    );
  }

  @Patch(':userId')
  async updateUserPartial(
    @Param('userId') userId: string,
    @Body() updateUserPartialDTO: UpdateUserPartialDTO,
  ): Promise<IResponse<IUser>> {
    return await this.usersService.findOneByIdAndUpdateUserPartial(
      userId,
      updateUserPartialDTO,
    );
  }

  @Delete(':userId')
  async findOneByIdAndDeleteUser(
    @Param('userId') userId: string,
  ): Promise<IResponse<IUser>> {
    return await this.usersService.findOneByIdAndDeleteUser(userId);
  }
}
