import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tag, TagSchema } from './tag.schema';

@Module({
  exports: [TagsService],
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Tag.name,
        useFactory: () => {
          return TagSchema;
        },
      },
    ]),
  ],
  providers: [TagsService],
  controllers: [TagsController],
})
export class TagsModule {}
