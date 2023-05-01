import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contacts } from 'src/models/contacts.entity';
import { Faq } from 'src/models/faq.entity';
import { MinimumRentalConditions } from 'src/models/minimum-rental-conditions.entity';
import { PrivacyPolicy } from 'src/models/privacy-policy.entity';
import { PublicOffer } from 'src/models/public-offer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContentPagesService {
  constructor(
    @InjectRepository(MinimumRentalConditions)
    private minRentConditionsRepository: Repository<MinimumRentalConditions>,
    @InjectRepository(Faq)
    private faqRepository: Repository<Faq>,
    @InjectRepository(PrivacyPolicy)
    private privacyPolicyRepository: Repository<PrivacyPolicy>,
    @InjectRepository(PublicOffer)
    private publicOfferRepository: Repository<PublicOffer>,
    @InjectRepository(Contacts)
    private contactsRepository: Repository<Contacts>,
  ) {}

  async getRentTerms() {
    const minRent = await this.minRentConditionsRepository.find({
      select: {
        cardFirstTitle: true,
        cardFirstText: true,
        cardSecondTitle: true,
        cardSecondText: true,
        cardThirdTitle: true,
        cardThirdText: true,
      },
      order: {
        updated_at: 'DESC',
      },
      take: 1,
    });

    const faq = await this.faqRepository.find({
      select: {
        cardFirstQuestionTitle: true,
        cardFirstQuestionText: true,
        cardSecondQuestionTitle: true,
        cardSecondQuestionText: true,
        cardThirdQuestionTitle: true,
        cardThirdQuestionText: true,
        cardFourthQuestionTitle: true,
        cardFourthQuestionText: true,
      },
      order: {
        updated_at: 'DESC',
      },
      take: 1,
    });

    return { minRent: minRent[0], faq: faq[0] };
  }

  async getPrivacyPolicy() {
    return (
      await this.privacyPolicyRepository.find({
        select: {
          text: true,
        },
        order: {
          updated_at: 'DESC',
        },
        take: 1,
      })
    )[0];
  }

  async getPublicOffer() {
    return (
      await this.publicOfferRepository.find({
        select: {
          text: true,
        },
        order: {
          updated_at: 'DESC',
        },
        take: 1,
      })
    )[0];
  }

  async getContacts() {
    return (
      await this.contactsRepository.find({
        select: {
          address: true,
          workingMode: true,
          phoneNumber: true,
          email: true,
          technicalSupport: true,
        },
        order: {
          updated_at: 'DESC',
        },
        take: 1,
      })
    )[0];
  }
}
