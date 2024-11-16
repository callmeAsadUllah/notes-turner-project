import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { Note } from './note.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.schema';
import { Tag } from 'src/tags/tag.entity';
import { NoteTags } from 'src/note-tags/note-tags.entity';

@Module({
  controllers: [NotesController],
  exports: [NotesService],
  imports: [TypeOrmModule.forFeature([User, Note, Tag, NoteTags])],
  providers: [NotesService],
})
export class NotesModule {}
