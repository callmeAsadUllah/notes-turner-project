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
import { TagsService } from './tags.service';
import { Tag } from './tag.entity';

@Controller('users')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get(':userId/tags')
  async findListUserTags(@Param('userId') userId: string): Promise<Tag[]> {
    return this.tagsService.findListUserTags(userId);
  }

  @Post(':userId/tags')
  async createUserTag(
    @Param('userId') userId: string,
    @Body('name') name: string,
  ): Promise<Tag> {
    return this.tagsService.createUserTag(userId, name);
  }

  @Put(':userId/tags/:tagId')
  async updateUserTag(): Promise<object> {
    return this.tagsService.testUserNoteTags();
  }

  @Patch(':userId/tags/:tagId')
  async updateUserTagPartial(): Promise<object> {
    return this.tagsService.testUserNoteTags();
  }

  @Get(':userId/tags/:tagId')
  async findOneUserTag(
    @Param('userId') userId: string,
    @Param('tagId') tagId: string,
  ): Promise<Tag> {
    return this.tagsService.findOneUserTag(userId, tagId);
  }

  @Delete(':userId/tags/:tagId')
  async deleteOneUserTag(
    @Param('userId') userId: string,
    @Param('tagId') tagId: string,
  ): Promise<void> {
    return this.tagsService.deleteOneUserTag(userId, tagId);
  }
}
