import { Entity, Column } from 'typeorm';
import { BaseEntity } from './utils/base.entity';

@Entity({ name: 'AboutCompany' })
export class AboutCompany extends BaseEntity {
  @Column('text')
  text: string;
}
