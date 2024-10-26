import { Injectable } from '@nestjs/common';
import { CreateTagDTO } from './create-tag.dto';
import { Repository } from 'typeorm';
import { Tag } from './tag.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private tagsRepository: Repository<Tag>,
  ) {}

  async create(createTagDTO: CreateTagDTO): Promise<Tag> {
    const note = this.tagsRepository.create(createTagDTO);
    return await this.tagsRepository.save(note);
  }

  async find(): Promise<Tag[]> {
    return await this.tagsRepository.find();
  }
}
