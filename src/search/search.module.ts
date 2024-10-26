import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from '../notes/note.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Note])],
  exports: [SearchService],
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}
