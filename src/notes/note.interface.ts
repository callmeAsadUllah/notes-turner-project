export interface INote {
  noteID: string;
  title: string;
  content?: string;
  createdAt: Date;
  updatedAt?: Date;
}
