import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './tag.entity';
import { User } from 'src/users/user.schema';

@Module({
  exports: [TagsService],
  imports: [TypeOrmModule.forFeature([User, Tag])],
  providers: [TagsService],
  controllers: [TagsController],
})
export class TagsModule {}
