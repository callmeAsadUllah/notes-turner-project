import { INote } from '../notes/note.interface';
import { ITag } from '../tags/tag.interface';

export interface IUser {
  userId: string;
  firstName?: string;
  lastName?: string;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt?: Date;
  notes?: INote[];
  tags?: ITag[];
}
