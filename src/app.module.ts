import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesModule } from './notes/notes.module';
import { TagsModule } from './tags/tags.module';
import { NoteTagsModule } from './note-tags/note-tags.module';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data/db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    NotesModule,
    TagsModule,
    NoteTagsModule,
    UsersModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}

//
// // app.module.ts
// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersController } from './users.controller';
// import { UsersService } from './users.service';
// import { NotesController } from './notes.controller';
// import { NotesService } from './notes.service';
// import { User } from './user.entity';
// import { Note } from './note.entity';
//
// @Module({
//     imports: [TypeOrmModule.forFeature([User, Note])],
//     controllers: [UsersController, NotesController],
//     providers: [UsersService, NotesService],
// })
// export class AppModule {}
