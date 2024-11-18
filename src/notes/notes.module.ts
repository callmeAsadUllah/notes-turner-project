import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from './note.schema';

@Module({
  controllers: [NotesController],
  exports: [NotesService],
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Note.name,
        useFactory: () => {
          return NoteSchema;
        },
      },
    ]),
  ],
  providers: [NotesService],
})
export class NotesModule {}
