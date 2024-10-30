import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { Note } from './note.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';

@Module({
  controllers: [NotesController],
  exports: [NotesService],
  imports: [TypeOrmModule.forFeature([Note, User])],
  providers: [NotesService],
})
export class NotesModule {}
