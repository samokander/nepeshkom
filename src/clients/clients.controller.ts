import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { AddSumDto } from './dto/add-client-account-sum.dto';
import { AddClientDto } from './dto/add-client.dto';
import { GetClientsDto } from './dto/get-clients.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}
  @Get()
  async getClient(@Body() getClientsDto: GetClientsDto) {
    return await this.clientsService.getClient(getClientsDto);
  }

  @Post('/create-client')
  async newClient(@Body() addClientDto: AddClientDto) {
    return await this.clientsService.addClient(addClientDto);
  }

  @Post('/add-client-account-sum')
  async addClientAccountSum(@Body() addSumDto: AddSumDto) {
    return await this.clientsService.addClientAccountSum(addSumDto);
  }
}
