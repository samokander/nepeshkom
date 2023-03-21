import { Controller, Get, Body, Param } from '@nestjs/common';
import { AutosService } from './autos.service';
import { GetAutoUsedIntervalsDto } from './dto/get-auto-used-intervals.dto';
import { SearchAutoInputDto } from './dto/search-auto-input.dto';
import { SearchAutosWithFullAutoDataDto } from './dto/search-autos-with-full-auto-data.dto';

@Controller('autos')
export class AutosController {
  constructor(private readonly autosService: AutosService) {}

  @Get()
  async getAllAutos() {
    return await this.autosService.getAllAutos();
  }

  @Get('/search')
  async searchAutos(@Body() body: SearchAutoInputDto) {
    return await this.autosService.searchAutos(body);
  }

  @Get('/search-with-full-data') 
  async searchAutosWithFullAutoData(@Body() body: SearchAutosWithFullAutoDataDto) {
    return await this.autosService.searchAutosWithFullAutoData(body);
  }

  @Get('/auto-info')
  async getAutoInfo(@Param('id') autoId: number) {
    return await this.autosService.getAutoInfo(autoId);
  }

  @Get()
  async getAutoUsedIntervals(@Body() body: GetAutoUsedIntervalsDto) {
    return await this.autosService.getAutoUsedIntervals(body);
  }

  @Get('/:id')
  async getAutoById(@Param('id') autoId: number) {
    return await this.autosService.getAutoById(autoId);
  }
}
