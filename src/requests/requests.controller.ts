import { Body, Controller, Get, Post } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { NewRequestDto } from './dto/new-request.dto';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Post()
  async newRequest(@Body() newRequestDto: NewRequestDto) {
    return await this.requestsService.addRequest(newRequestDto);
  }
}
 