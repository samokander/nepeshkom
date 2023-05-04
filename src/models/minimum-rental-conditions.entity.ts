import { Column, Entity } from 'typeorm';
import { BaseEntity } from './utils/base.entity';

@Entity({ name: 'MinimumRentalConditions' })
export class MinimumRentalConditions extends BaseEntity {
  @Column('text')
  cardFirstTitle: string;

  @Column('text')
  cardFirstText: string;

  @Column('text')
  cardSecondTitle: string;

  @Column('text')
  cardSecondText: string;

  @Column('text')
  cardThirdTitle: string;

  @Column('text')
  cardThirdText: string;
}
