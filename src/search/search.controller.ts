import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { Note } from '../notes/note.entity';
import { SearchNotesDTO } from './search-notes.dto';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('notes')
  async searchNotes(@Query() searchNotesDTO: SearchNotesDTO): Promise<Note[]> {
    return await this.searchService.searchNotes(searchNotesDTO);
  }
}
