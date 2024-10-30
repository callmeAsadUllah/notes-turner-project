export interface IUser {
  userId: string;
  firstName?: string;
  lastName?: string;
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
  createdAt: Date;
  updatedAt?: Date;
}
