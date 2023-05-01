import { Controller, Get } from '@nestjs/common';
import { ContentPagesService } from './content-pages.service';

@Controller('content-pages')
export class ContentPagesController {
  constructor(private readonly contentPagesService: ContentPagesService) {}

  @Get('rent-terms')
  async getRentTerms() {
    return await this.contentPagesService.getRentTerms();
  }

  @Get('privacy-policy')
  async getPrivacyPolicy() {
    return await this.contentPagesService.getPrivacyPolicy();
  }

  @Get('public-offer')
  async getPublicOffer() {
    return await this.contentPagesService.getPublicOffer();
  }

  @Get('contacts')
  async getContacts() {
    return await this.contentPagesService.getContacts();
  }
}
