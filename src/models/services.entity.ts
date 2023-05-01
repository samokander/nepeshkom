import { Column, Entity } from 'typeorm';
import { BaseEntity } from './utils/base.entity';

@Entity({ name: 'Services' })
export class Services extends BaseEntity {
  @Column('text')
  RentalWithDriverText: string;

  @Column('text')
  RentalWithoutDriverText: string;

  @Column('text')
  transferText: string;

  @Column('text')
  autoForPhotoSession: string;
}
