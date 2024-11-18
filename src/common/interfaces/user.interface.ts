import { Types } from 'mongoose';

export interface IUser {
  username: string;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  notes?: Types.ObjectId[];
  tags?: Types.ObjectId[];
}
