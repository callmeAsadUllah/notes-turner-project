export interface INote {
  noteId: string;
  title?: string;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
}
