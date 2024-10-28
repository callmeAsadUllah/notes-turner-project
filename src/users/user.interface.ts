export interface IUser {
  userID: string;
  firstName?: string;
  lastName?: string;
  username: string;
  email: string;
  profilePicture?: string;
  password: string;
  confirmPassword?: string;
  createdAt: Date;
  updatedAt?: Date;
}
