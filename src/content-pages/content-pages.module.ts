import { Module } from '@nestjs/common';
import { ContentPagesController } from './content-pages.controller';
import { ContentPagesService } from './content-pages.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MinimumRentalConditions } from 'src/models/minimum-rental-conditions.entity';
import { Faq } from 'src/models/faq.entity';
import { PrivacyPolicy } from 'src/models/privacy-policy.entity';
import { PublicOffer } from 'src/models/public-offer.entity';
import { Contacts } from 'src/models/contacts.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MinimumRentalConditions,
      Faq,
      PrivacyPolicy,
      PublicOffer,
      Contacts,
    ]),
  ],
  controllers: [ContentPagesController],
  providers: [ContentPagesService],
})
export class ContentPagesModule {}
