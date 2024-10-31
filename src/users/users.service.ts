import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findListUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async createUser(user: User): Promise<User> {
    const newUser = this.usersRepository.create(user);
    return await this.usersRepository.save(newUser);
  }

  async findOneUser(userId: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: { userId: userId },
      relations: ['notes', 'tags'],
    });
  }

  async deleteUser(userId: string): Promise<void> {
    await this.usersRepository.delete(userId);
  }

  async testUser(): Promise<object> {
    return {
      message: 'success',
    };
  }
}
