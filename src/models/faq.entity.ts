import { Column, Entity } from 'typeorm';
import { BaseEntity } from './utils/base.entity';

@Entity({ name: 'Faq' })
export class Faq extends BaseEntity {
  @Column('text')
  cardFirstQuestionTitle: string;

  @Column('text')
  cardFirstQuestionText: string;

  @Column('text')
  cardSecondQuestionTitle: string;

  @Column('text')
  cardSecondQuestionText: string;

  @Column('text')
  cardThirdQuestionTitle: string;

  @Column('text')
  cardThirdQuestionText: string;

  @Column('text')
  cardFourthQuestionTitle: string;

  @Column('text')
  cardFourthQuestionText: string;
}
