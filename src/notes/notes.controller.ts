import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Patch,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './note.entity';
import { Tag } from 'src/tags/tag.entity';

@Controller('users')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get(':userId/notes')
  async findListUserNotes(@Param('userId') userId: string): Promise<Note[]> {
    return this.notesService.findListUserNotes(userId);
  }

  @Post(':userId/notes')
  async createUserNote(
    @Param('userId') userId: string,
    @Body('content') content: string,
  ): Promise<Note> {
    return this.notesService.createUserNote(userId, content);
  }

  @Put(':userId/tags/:tagId')
  async updateUserNote(): Promise<object> {
    return this.notesService.testUserNote();
  }

  @Patch(':userId/tags/:tagId')
  async updateUserNotePartial(): Promise<object> {
    return this.notesService.testUserNote();
  }

  @Get(':userId/notes/:noteId')
  async findOneUserNote(
    @Param('userId') userId: string,
    @Param('noteId') noteId: string,
  ): Promise<Note> {
    return this.notesService.findOneUserNote(userId, noteId);
  }

  @Delete(':userId/notes/:noteId')
  async deleteOneUserNote(
    @Param('userId') userId: string,
    @Param('noteId') noteId: string,
  ): Promise<void> {
    return this.notesService.deleteOneUserNote(userId, noteId);
  }

  @Get(':userId/notes/:noteId/tags')
  async findListUserNoteTags(
    @Param('userId') userId: string,
    @Param('noteId') noteId: string,
  ): Promise<Tag[]> {
    return this.notesService.findListUserNoteTags(userId, noteId);
  }

  @Post(':userId/notes/:noteId/tags')
  async createUserNoteTags(
    @Param('userId') userId: string,
    @Param('noteId') noteId: string,
    @Body('name') name: string,
  ): Promise<Tag> {
    return this.notesService.createUserNoteTags(userId, noteId, name);
  }

  //
  //   @Put(':userId/tags/:tagId')
  //   async updateUserNoteTag(): Promise<object> {
  //     return this.tagsService.testUserNoteTags();
  //   }
  //
  //   @Patch(':userId/tags/:tagId')
  //   async updateUserNoteTagPartial(): Promise<object> {
  //     return this.tagsService.testUserNoteTags();
  //   }
  //
  @Get(':userId/notes/:noteId/tags/:tagId')
  async findOneUserNoteTag(
    @Param('userId') userId: string,
    @Param('noteId') noteId: string,
  ): Promise<Tag> {
    return this.notesService.findOneUserNoteTag(userId, noteId);
  }
  //
  //   @Delete(':userId/notes/:noteId/tags/:tagId')
  //   async deleteOneUserNoteTags(): Promise<object> {
  //     return this.tagsService.testUserNoteTags();
  //   }
}
