import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { NotesModule } from 'src/notes/notes.module';
import { TagsModule } from 'src/tags/tags.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), NotesModule, TagsModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
