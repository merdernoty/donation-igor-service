import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255 })
  email!: string;

  @Column({ length: 255 })
  name!: string;

  @Exclude()
  password!: string;
}

export class UserFillableFields {
  email!: string;
  name!: string;
  password!: string;
}
