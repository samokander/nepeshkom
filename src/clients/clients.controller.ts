import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { AddSumDto } from './dto/add-client-account-sum.dto';
import { AddClientDto } from './dto/add-client.dto';
import { getVerificationCodeDto } from 'src/auth/dto/get-verification-code.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}
  @Post()
  async getAll(@Body() body: getVerificationCodeDto) {
    return await this.clientsService.getAllClients(body);
  }

  @Post()
  async newClient(@Body() addClientDto: AddClientDto) {
    return await this.clientsService.addClient(addClientDto);
  }

  @Post()
  async addClientAccountSum(@Body() addSumDto: AddSumDto) {
    return await this.clientsService.addClientAccountSum(addSumDto);
  }
}
