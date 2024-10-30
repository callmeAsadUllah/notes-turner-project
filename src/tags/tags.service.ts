import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tag } from './tag.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  async createTag(tag: Tag): Promise<Tag> {
    return await this.tagRepository.save(tag);
  }

  async findTags(): Promise<Tag[] | null> {
    return await this.tagRepository.find();
  }
  async findOneTag(tagId: string): Promise<Tag | null> {
    return await this.tagRepository.findOne({ where: { tagId } });
  }

  async deleteTag(tagId: string): Promise<void> {
    await this.tagRepository.delete(tagId);
  }
}
