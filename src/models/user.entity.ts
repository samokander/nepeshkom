import { Column, Entity } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseEntity } from './utils/base.entity';
import { PasswordTransformer } from './utils/password.transformer';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @Column({ length: 64 })
  username: string;

  @Column({ length: 255 })
  email!: string;

  @Column({
    name: 'password',
    length: 255,
    transformer: new PasswordTransformer(),
  })
  @Exclude()
  password!: string;
}
