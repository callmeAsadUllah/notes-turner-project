import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDTO } from './create-note.dto';
import { Note } from './note.entity';
import { UpdateNoteDTO } from './update-note.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  async create(@Body() createNoteDTO: CreateNoteDTO): Promise<Note> {
    return await this.notesService.create(createNoteDTO);
  }

  @Put(':noteID')
  async updateNote(
    @Param('noteID') noteID: string,
    @Body() updateNoteDTO: UpdateNoteDTO,
  ): Promise<Note> {
    return this.notesService.updateNote(noteID, updateNoteDTO);
  }

  @Get(':userId/notes')
  async getUserNotes(@Param('userID') userID: string): Promise<Note[]> {
    return this.notesService.findUserNotes(userID);
  }

  @Get(':noteID')
  async findOne(@Param('noteID') noteID: string): Promise<Note> {
    return await this.notesService.findOne(noteID);
  }

  @Delete(':noteID')
  async delete(@Param('noteID') noteID: string): Promise<void> {
    await this.notesService.delete(noteID);
  }
}
