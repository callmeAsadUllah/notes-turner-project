import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { IResponse } from 'src/common/interfaces/response.interface';
import { IUser } from '../common/interfaces/user.interface';
import {
  CreateUserDTO,
  UpdateUserDTO,
  UpdateUserPartialDTO,
} from 'src/common/dtos/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly usersModel: Model<UserDocument>,
  ) {}

  async listUsers(): Promise<IResponse<IUser[]>> {
    const users = await this.usersModel.find();
    return { message: 'Users fetched successfully', data: users };
  }
  async createUser(createUserDTO: CreateUserDTO): Promise<IResponse<IUser>> {
    const user = new this.usersModel(createUserDTO);
    await user.save();
    return { message: 'User created successfully', data: user };
  }

  async findOneById(userId: string): Promise<IResponse<IUser>> {
    const user = await this.usersModel.findById(userId).exec();
    return {
      message: 'User fetched successfully',
      data: user,
    };
  }

  async findOneByIdAndUpdateUser(
    userId: string,
    updateUserDTO: UpdateUserDTO,
  ): Promise<IResponse<IUser>> {
    const user = await this.usersModel
      .findByIdAndUpdate(userId, updateUserDTO, {
        new: true,
        runValidators: true,
      })
      .exec();
    return { message: 'User updated successfully', data: user };
  }

  async findOneByIdAndUpdateUserPartial(
    userId: string,
    updateUserPartialDTO: UpdateUserPartialDTO,
  ): Promise<IResponse<IUser>> {
    const user = await this.usersModel
      .findByIdAndUpdate(userId, updateUserPartialDTO, {
        new: true,
        runValidators: true,
      })
      .exec();
    return { message: 'User updated successfully', data: user };
  }

  async findOneByIdAndDeleteUser(userId: string): Promise<IResponse<null>> {
    const user = await this.usersModel.findByIdAndDelete(userId).exec();
    return { message: 'User deleted successfully', data: null };
  }
}
