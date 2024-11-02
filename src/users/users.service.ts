import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findListUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);
  }

  async findOneUserById(userId: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: { userId: userId },
      relations: ['notes', 'tags'],
    });
  }

  async findOneUserByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: [{ email: email }],
    });
  }

  async deleteUser(userId: string): Promise<void> {
    await this.usersRepository.delete(userId);
  }
}
