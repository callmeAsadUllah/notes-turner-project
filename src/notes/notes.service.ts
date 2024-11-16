import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';
import { User } from 'src/users/user.schema';
import { Tag } from 'src/tags/tag.entity';
import { NoteTags } from 'src/note-tags/note-tags.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(NoteTags)
    private noteTagsRepository: Repository<NoteTags>,
    @InjectRepository(Tag)
    private tagsRepository: Repository<Tag>,
  ) {}

  async findListUserNotes(userId: string): Promise<Note[]> {
    const notes = await this.notesRepository.find({
      where: { user: { userId: userId } },
      relations: ['user', 'tags'],
    });

    return notes;
  }

  async createUserNote(userId: string, content: string): Promise<Note> {
    const user = await this.usersRepository.findOne({
      where: { userId: userId },
    });
    const note = this.notesRepository.create({ content, user });
    return this.notesRepository.save(note);
  }

  async findOneUserNote(userId: string, noteId: string): Promise<Note> {
    const note = await this.notesRepository.findOne({
      where: {
        noteId: noteId,
        user: { userId: userId },
      },
    });

    return note;
  }

  async deleteOneUserNote(userId: string, noteId: string): Promise<void> {
    const note = await this.notesRepository.findOne({
      where: { noteId: noteId, user: { userId: userId } },
    });

    await this.notesRepository.remove(note);
  }

  async findListUserNoteTags(userId: string, noteId: string): Promise<Tag[]> {
    const noteTags = await this.noteTagsRepository.find({
      where: { note: { noteId: noteId, user: { userId: userId } } },
      relations: ['tag'],
    });
    return noteTags.map((noteTag) => noteTag.tag);
  }

  async createUserNoteTags(
    userId: string,
    noteId: string,
    name: string,
  ): Promise<Tag> {
    const note = await this.notesRepository.findOne({
      where: { noteId: noteId, user: { userId: userId } },
    });
    const tag = this.tagsRepository.create({ name });
    const savedTag = await this.tagsRepository.save(tag);
    const noteTag = this.noteTagsRepository.create({
      note,
      tag: savedTag,
    });
    await this.noteTagsRepository.save(noteTag);

    return savedTag;
  }

  async findOneUserNoteTag(userId: string, noteId: string): Promise<Tag> {
    const noteTag = await this.noteTagsRepository.findOne({
      where: {
        note: { noteId: noteId, user: { userId: userId } },
      },
      relations: ['tag'],
    });

    return noteTag.tag;
  }

  async testUserNote(): Promise<object> {
    return {
      message: 'success',
    };
  }
}
