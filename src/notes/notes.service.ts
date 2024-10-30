import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';
import { CreateNoteDTO } from './create-note.dto';
import { UpdateNoteDTO } from './update-note.dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
  ) {}

  async createNote(note: Note): Promise<Note> {
    return await this.notesRepository.save(note);
  }

  async findOneNote(noteId: string): Promise<Note | null> {
    return await this.notesRepository.findOne({
      where: { noteId },
    });
  }

  async findNotes(): Promise<Note[] | null> {
    return await this.notesRepository.find();
  }

  async deleteNote(noteId: string): Promise<void> {
    await this.notesRepository.delete(noteId);
  }
}
