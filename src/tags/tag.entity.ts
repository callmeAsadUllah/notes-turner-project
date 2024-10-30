import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { ITag } from './tag.interface';
import { NoteTags } from '../note-tags/note-tags.entity';
import { User } from 'src/users/user.entity';

@Entity({ name: 'tags' })
export class Tag implements ITag {
  @PrimaryGeneratedColumn('uuid', { name: 'tag_id' })
  tagId: string;

  @Column({ name: 'name', unique: true })
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => User, (user) => user.notes)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => NoteTags, (noteTags) => noteTags.tag, { cascade: true })
  noteTags: NoteTags[];
}
