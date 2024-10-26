import { Injectable, NotFoundException } from '@nestjs/common';
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

  async create(createNoteDTO: CreateNoteDTO): Promise<Note> {
    const note = this.notesRepository.create(createNoteDTO);
    return await this.notesRepository.save(note);
  }

  async updateNote(
    noteID: string,
    updateNoteDTO: UpdateNoteDTO,
  ): Promise<Note> {
    const note = await this.notesRepository.findOne({ where: { noteID } });
    console.log(note);
    const updatedNote = {
      ...note,
      ...updateNoteDTO,
    };
    console.log(updatedNote);
    return this.notesRepository.save(updatedNote);
  }

  async find(): Promise<Note[]> {
    return await this.notesRepository.find();
  }

  async findOne(noteID: string): Promise<Note> {
    return await this.notesRepository.findOne({
      where: { noteID },
    });
  }

  async delete(noteID: string): Promise<void> {
    const note = await this.notesRepository.findOne({ where: { noteID } });
    await this.notesRepository.delete(note);
  }
}
