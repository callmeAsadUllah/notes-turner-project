import { Note } from '../notes/note.entity';
import { Tag } from '../tags/tag.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'note_tags' })
export class NoteTags {
  @PrimaryGeneratedColumn('uuid', { name: 'note_tags_id' })
  noteTagsID: string;

  @ManyToOne(() => Note, (note) => note.noteTags)
  note: Note;

  @ManyToOne(() => Tag, (tag) => tag.noteTags)
  tag: Tag;
}
