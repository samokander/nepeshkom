import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { AddClientDto } from './dto/add-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}
  @Get()
  async getAll() {
    return await this.clientsService.getAllClients();
  }

  @Post()
  async newClient(@Body() addClientDto: AddClientDto) {
    return await this.clientsService.addClient(addClientDto)
  }
}
