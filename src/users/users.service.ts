import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDTO } from './create-user.dto';
import { UpdateUserDTO } from './update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async register(): Promise<string[]> {
    return ['register'];
  }
  async logIn(): Promise<string[]> {
    return ['logIn'];
  }
  async profile(): Promise<string[]> {
    return ['profile'];
  }
  async logOut(): Promise<string[]> {
    return ['logOut'];
  }

  async create(createUserDTO: CreateUserDTO): Promise<User> {
    const user = this.usersRepository.create(createUserDTO);
    return this.usersRepository.save(user);
  }

  async find(): Promise<User[]> {
    return this.usersRepository.find({
      relations: ['notes', 'tags'],
    });
  }

  async findOne(userID: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: { userID },
    });
  }

  async updateUser(
    userID: string,
    updateUserDTO: UpdateUserDTO,
  ): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { userID } });
    console.log(user);
    const updatedUser = {
      ...user,
      ...updateUserDTO,
    };
    console.log(updatedUser);
    return this.usersRepository.save(updatedUser);
  }
}
