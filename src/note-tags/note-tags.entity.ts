import { Note } from '../notes/note.entity';
import { Tag } from '../tags/tag.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { INoteTag } from './note-tags.interface';

@Entity({ name: 'note_tags' })
export class NoteTags implements INoteTag {
  @PrimaryGeneratedColumn('uuid', { name: 'note_tags_id' })
  noteTagsId: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt: Date;

  @ManyToOne(() => Note, (note) => note.noteTags)
  @JoinColumn({ name: 'note_id' })
  note: Note;

  @ManyToOne(() => Tag, (tag) => tag.noteTags)
  @JoinColumn({ name: 'tag_id' })
  tag: Tag;
}
