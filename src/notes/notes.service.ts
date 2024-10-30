import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';
import { CreateNoteDTO } from './create-note.dto';
import { UpdateNoteDTO } from './update-note.dto';
import { User } from 'src/users/user.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
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

  async findUserNotes(userID: string): Promise<Note[]> {
    const user = await this.usersRepository.findOne({
      where: { userID: userID },
      relations: ['notes'],
    });
    return user.notes;
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
