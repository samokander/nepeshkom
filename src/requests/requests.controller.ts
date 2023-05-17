import { Body, Controller, Get, Post } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { NewRequestDto } from './dto/new-request.dto';
import { AddVerificationRequestDto } from './dto/add-verification-request.dto';
import { RequestInfoDto } from './dto/request-info.dto';
import { addRentRequestDto } from './dto/add-rent-request.dto';
import { GetRentRequestsDto } from './dto/get-rent-requests.dto';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Post('/add-request')
  async newRequest(@Body() newRequestDto: NewRequestDto) {
    return await this.requestsService.addRequest(newRequestDto);
  }

  @Post('add-rent')
  async addRentRequest(@Body() addRentRequestDto: addRentRequestDto) {
    return await this.requestsService.addRentRequest(addRentRequestDto);
  }

  @Post('/add-verification-request')
  async addVerificationRequest(
    @Body() addVerificationRequestDto: AddVerificationRequestDto,
  ) {
    return await this.requestsService.addVerificationRequest(
      addVerificationRequestDto,
    );
  }

  @Get('/get-request-info')
  async getRequestInfo(@Body() getRequestDto: RequestInfoDto) {
    return await this.requestsService.getRequestInfo(getRequestDto);
  }

  @Get('/get-rent-request-info')
  async getRentRequestInfo(@Body() rentRequestInfoDto: RequestInfoDto) {
    return await this.requestsService.getRentRequestInfo(rentRequestInfoDto);
  }

  @Post('/add-rent-request')
  async addRentRequest(@Body() requestRentDto: addRentRequestDto) {
    return await this.requestsService.addRentRequest(requestRentDto);
  }

  @Post('/add-verification-request')
  async addVerificationRequest(
    @Body() addVerificationRequestDto: AddVerificationRequestDto,
  ) {
    return await this.requestsService.addVerificationRequest(
      addVerificationRequestDto,
    );
  }

  @Get('/get-request-info')
  async getRequestInfo(@Body() getRequestDto: RequestInfoDto) {
    return await this.requestsService.getRequestInfo(getRequestDto);
  }

  @Get('/get-rent-request-info')
  async getRentRequestInfo(@Body() rentRequestInfoDto: RequestInfoDto) {
    return await this.requestsService.getRentRequestInfo(rentRequestInfoDto);
  }

  @Get('/get-rent-requests')
  async getRentRequests(@Body() getRentRequestsDto: GetRentRequestsDto) {
    return await this.requestsService.getRentRequests(getRentRequestsDto);
  }
}
