import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

import { CreateUserDto } from '../users/create-user.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  //   async authenticate(authInput: AuthInput): Promise<AuthResult> {
  //     const user = await this.usersService.findOneUserByEmail(authInput.email);
  //     return await this.logIn(user);
  //   }
  //
  //   async validateUser(authInput: AuthInput): Promise<LoggedInData> {
  //     const user = await this.usersService.findOneUserByEmail(authInput.email);
  //
  //     if (user && user.password === authInput.password) {
  //       return {
  //         userId: user.userId,
  //         email: user.email,
  //       };
  //     }
  //
  //     return null;
  //   }

  async register(createUserDto: CreateUserDto) {
    const user = await this.usersService.findOneUserByEmail(
      createUserDto.email,
    );

    if (user) {
      throw new Error('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    createUserDto.password = hashedPassword;

    return await this.usersService.createUser(createUserDto);
  }

  async login(
    email: string,
    password: string,
  ): Promise<{ accessToken: string }> {
    const user = await this.usersService.findOneUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid email or password');
    }

    const payload = { email: user.email, sub: user.userId };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
