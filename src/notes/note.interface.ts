import { ITag } from 'src/tags/tag.interface';
import { IUser } from 'src/users/user.interface';

export interface INote {
  noteID: string;
  title: string;
  content?: string;
  createdAt: Date;
  updatedAt?: Date;
  user: IUser;
  tags?: ITag[];
}
