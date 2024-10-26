import { Module } from '@nestjs/common';
import { NoteTagsService } from './note-tags.service';
import { NoteTagsController } from './note-tags.controller';

@Module({
  providers: [NoteTagsService],
  controllers: [NoteTagsController],
})
export class NoteTagsModule {}
