import { Controller, Get, Body, Param } from '@nestjs/common';
import { AutosService } from './autos.service';

@Controller('autos')
export class AutosController {
  constructor(private readonly autosService: AutosService) {}

  @Get()
  async getAllAutos() {
    return await this.autosService.getAllAutos();
  }

  @Get('/search')
  async searchAutos(@Body() body: any) {
    return await this.autosService.searchAutos(body);
  }

  @Get('/:id')
  async getAutoById(@Param('id') id: number) {
    return await this.autosService.getAutoById(id);
  }
}
