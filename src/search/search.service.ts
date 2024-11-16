import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from '../notes/note.entity';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
  ) {}
}
