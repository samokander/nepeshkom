import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 64 })
  username: string;

  @Column({ type: 'varchar' })
  password_hash: string;
}
