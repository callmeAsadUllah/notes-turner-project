import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  async findUsers(): Promise<User[]> {
    return await this.usersService.findUsers();
  }
}
