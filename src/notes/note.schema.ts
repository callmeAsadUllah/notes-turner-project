import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type NoteDocument = Document<Note>;

@Schema({ timestamps: true })
export class Note {
  @Prop({ required: false })
  title?: string;

  @Prop({ required: true })
  content: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
