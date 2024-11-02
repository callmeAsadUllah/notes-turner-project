import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_KEY || 'Amna',
      signOptions: { expiresIn: '1d' },
    }),
    UsersModule,
  ],
  exports: [AuthService],
})
export class AuthModule {}
