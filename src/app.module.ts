import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { NotesModule } from './notes/notes.module';
import { TagsModule } from './tags/tags.module';
import { NoteTagsModule } from './note-tags/note-tags.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    NotesModule,
    TagsModule,
    NoteTagsModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
