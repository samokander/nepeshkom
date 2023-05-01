import { Column, Entity } from 'typeorm';
import { BaseEntity } from './utils/base.entity';

@Entity({ name: 'PrivacyPolicy' })
export class PrivacyPolicy extends BaseEntity {
  @Column('text')
  text: string;
}
