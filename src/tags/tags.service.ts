import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';
import { Tag } from './tag.entity';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private tagsRepository: Repository<Tag>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findListUserTags(userId: string): Promise<Tag[]> {
    const tags = await this.tagsRepository.find({
      where: { user: { userId: userId } },
      relations: ['user'],
    });

    return tags;
  }

  async createUserTag(userId: string, name: string): Promise<Tag> {
    const user = await this.usersRepository.findOne({
      where: { userId: userId },
    });
    const tag = this.tagsRepository.create({ name, user });
    return this.tagsRepository.save(tag);
  }

  async findOneUserTag(userId: string, tagId: string): Promise<Tag> {
    const note = await this.tagsRepository.findOne({
      where: {
        tagId: tagId,
        user: { userId: userId },
      },
    });

    return note;
  }

  async deleteOneUserTag(userId: string, tagId: string): Promise<void> {
    const tag = await this.tagsRepository.findOne({
      where: { tagId: tagId, user: { userId: userId } },
    });

    await this.tagsRepository.remove(tag);
  }

  async testUserNoteTags(): Promise<object> {
    return {
      message: 'success',
    };
  }
}
