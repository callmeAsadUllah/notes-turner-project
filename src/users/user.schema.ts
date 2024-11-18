import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RoleEnum } from '../common/roles/roles.enum';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ type: String, required: true, unique: true, index: true })
  username: string;

  @Prop({ type: String, required: false })
  firstName?: string;

  @Prop({ type: String, required: false })
  lastName?: string;

  @Prop({ type: String, required: true, unique: true, index: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, enum: RoleEnum, default: RoleEnum.ADMIN })
  role: RoleEnum;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Note' }] })
  notes?: Types.Array<Types.ObjectId>;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Tag' }] })
  tags?: Types.Array<Types.ObjectId>;
}

export const UserSchema = SchemaFactory.createForClass(User);
