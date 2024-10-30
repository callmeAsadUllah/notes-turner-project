import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './note.entity';

@Controller('notes')
export class NotesController {
  constructor(private readonly noteService: NotesService) {}

  @Post()
  async createNote(@Body() note: Note): Promise<Note> {
    return await this.noteService.createNote(note);
  }

  @Get()
  async findNotes(): Promise<Note[] | null> {
    return await this.noteService.findNotes();
  }

  @Get(':noteId')
  async findOneNote(@Param('noteId') noteId: string): Promise<Note | null> {
    return await this.noteService.findOneNote(noteId);
  }

  @Delete(':noteId')
  async deleteNote(@Param('noteId') noteId: string): Promise<void> {
    return await this.noteService.deleteNote(noteId);
  }
}
