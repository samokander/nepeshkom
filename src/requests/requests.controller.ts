import { Body, Controller, Get, Post } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { NewRequestDto } from './dto/new-request.dto';
import { addRentRequestDto } from './dto/add-rent-request.dto';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Post('add-request')
  async newRequest(@Body() newRequestDto: NewRequestDto) {
    return await this.requestsService.addRequest(newRequestDto);
  }

  @Post('add-rent')
  async addRentRequest(@Body() addRentRequestDto: addRentRequestDto) {
    return await this.requestsService.addRentRequest(addRentRequestDto);
  }
}
 