import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findUsers(): Promise<User[] | null> {
    return await this.userRepository.find();
  }

  async findOneUser(userId: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { userId } });
  }

  async createUser(user: User): Promise<User> {
    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }

  async deleteUser(userId: string): Promise<void> {
    await this.userRepository.delete(userId);
  }
}
