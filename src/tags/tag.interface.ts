import { IUser } from 'src/users/user.interface';
import { INote } from '../notes/note.interface';

export interface ITag {
  tagID: string;
  name: string;
  createdAt: Date;
  updatedAt?: Date;
  user: IUser;
  notes?: INote[];
}
