import { Column, Entity } from 'typeorm';
import { BaseEntity } from './utils/base.entity';

@Entity({ name: 'PublicOffer' })
export class PublicOffer extends BaseEntity {
  @Column('text')
  text: string;
}
