import { ITag } from './../tags/tag.interface';
import { INote } from './../notes/note.interface';

export interface IUser {
  userID: string;
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
