import { Controller, Body, Post, Get, Param, Delete } from '@nestjs/common';
import { TagsService } from './tags.service';
import { Tag } from './tag.entity';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagService: TagsService) {}

  @Get()
  async findTags(): Promise<Tag[] | null> {
    return await this.tagService.findTags();
  }

  @Post()
  async createTag(@Body() tag: Tag): Promise<Tag> {
    return await this.tagService.createTag(tag);
  }

  @Get(':tagId')
  async findOneTag(@Param('tagId') tagId: string): Promise<Tag | null> {
    return await this.tagService.findOneTag(tagId);
  }

  @Delete(':tagId')
  async deleteTag(@Param('tagId') tagId: string): Promise<void> {
    return await this.tagService.deleteTag(tagId);
  }
}
