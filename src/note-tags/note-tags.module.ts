import { Module } from '@nestjs/common';
import { NoteTagsService } from './note-tags.service';
import { NoteTagsController } from './note-tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteTags } from './note-tags.entity';
import { Note } from 'src/notes/note.entity';
import { Tag } from 'src/tags/tag.entity';
import { NotesModule } from 'src/notes/notes.module';
import { TagsModule } from 'src/tags/tags.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Note, Tag, NoteTags]),
    NotesModule,
    TagsModule,
  ],
  providers: [NoteTagsService],
  controllers: [NoteTagsController],
  exports: [NoteTagsService],
})
export class NoteTagsModule {}
