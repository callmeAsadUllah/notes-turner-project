import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { INote } from './note.interface';
import { NoteTags } from '../note-tags/note-tags.entity';
import { User } from 'src/users/user.entity';

@Entity({ name: 'notes' })
export class Note implements INote {
  @PrimaryGeneratedColumn('uuid', { name: 'note_id' })
  noteId: string;

  @Column({ name: 'title', nullable: true })
  title?: string;

  @Column('text', { name: 'content' })
  content: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => User, (user) => user.notes)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => NoteTags, (noteTag) => noteTag.note, {
    cascade: true,
    nullable: true,
  })
  noteTags?: NoteTags[];
}
