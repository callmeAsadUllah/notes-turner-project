import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { IUser } from './user.interface';
import { Note } from 'src/notes/note.entity';
import { Tag } from 'src/tags/tag.entity';

@Entity({ name: 'users' })
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  userID: string;

  @Column({ name: 'first_name', nullable: true })
  firstName?: string;

  @Column({ name: 'last_name', nullable: true })
  lastName?: string;

  @Column({ name: 'username', unique: true })
  username: string;

  @Column({ name: 'email', unique: true })
  email: string;

  @Column('text', { name: 'profile_picture', nullable: true })
  profilePicture?: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'confirm_password', nullable: true })
  confirmPassword?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(() => Note, (note) => note.user)
  notes?: Note[];

  @OneToMany(() => Tag, (tag) => tag.user)
  tags?: Tag[];
}
