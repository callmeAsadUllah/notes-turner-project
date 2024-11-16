import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = Document<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ type: String })
  username: string;

  @Prop({ type: [Types.ObjectId, ref: 'Notes'] })
  notes?: Note[];

   @Prop({ type: [Types.ObjectId, ref: 'Tags'] })
  tags?: Tag[];
}

export const UserSchema = SchemaFactory.createForClass(User);
