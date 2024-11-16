import { INote } from '../notes/note.interface';
import { ITag } from '../tags/tag.interface';

export interface IUser {
  username: string;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  notes?: INote[];
  tags?: ITag[];
}
