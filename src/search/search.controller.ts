import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchNotesDTO } from './search-notes.dto';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}
}
