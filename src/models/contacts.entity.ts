import { Column, Entity } from 'typeorm';
import { BaseEntity } from './utils/base.entity';

@Entity({ name: 'Contacts' })
export class Contacts extends BaseEntity {
  @Column('text')
  address: string;

  @Column('text')
  workingMode: string;

  @Column('text')
  phoneNumber: string;

  @Column('text')
  email: string;

  @Column('text')
  technicalSupport: string;
}
