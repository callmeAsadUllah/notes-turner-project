import { Controller, Body, Post, Get } from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDTO } from './create-tag.dto';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  async find() {
    return await this.tagsService.find();
  }

  @Post()
  async create(@Body() createTagDTO: CreateTagDTO) {
    return await this.tagsService.create(createTagDTO);
  }
}
