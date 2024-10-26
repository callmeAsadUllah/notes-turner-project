import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from '../notes/note.entity';
import { Repository } from 'typeorm';
import { SearchNotesDTO } from './search-notes.dto';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Note)
    private readonly notesRepository: Repository<Note>,
  ) {}

  async searchNotes(searchParams: SearchNotesDTO): Promise<Note[]> {
    const queryBuilder = this.notesRepository.createQueryBuilder('note');

    if (searchParams.title) {
      queryBuilder.andWhere('note.title LIKE :title', {
        title: `%${searchParams.title}%`,
      });
    }

    if (searchParams.content) {
      queryBuilder.andWhere('note.content LIKE :content', {
        content: `%${searchParams.content}%`,
      });
    }

    if (searchParams.tags) {
      searchParams.tags.forEach((tag) => {
        queryBuilder.andWhere(':tag = ANY(note.tags)', { tag });
      });
    }

    return queryBuilder.getMany();
  }
}
