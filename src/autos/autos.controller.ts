import { Controller, Get, Body, Param, UseInterceptors } from '@nestjs/common';
import { AutosService } from './autos.service';
import { GetAutoUsedIntervalsDto } from './dto/get-auto-used-intervals.dto';
import { SearchAutoInputDto } from './dto/search-auto-input.dto';
import { SearchAutosWithFullAutoDataDto } from './dto/search-autos-with-full-auto-data.dto';
import { FiltersInterceptor } from 'src/filters/filters.interceptor';
import { ObjectRequestParams } from './dto/object-request-params.dto';

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
  async searchAutosWithFullAutoData(
    @Body() body: SearchAutosWithFullAutoDataDto,
  ) {
    return await this.autosService.searchAutosWithFullAutoData(body);
  }

  @Get('/auto-info')
  async getAutoInfo(@Body() body: ObjectRequestParams) {
    return await this.autosService.getAutoInfo(body);
  }

  @Get()
  async getAutoUsedIntervals(@Body() body: GetAutoUsedIntervalsDto) {
    return await this.autosService.getAutoUsedIntervals(body);
  }

  @Get('/get-filter-params')
  @UseInterceptors(FiltersInterceptor)
  async getFiltersParams() {
    return await this.autosService.getFilterParams();
  }

  @Get('/:id')
  async getAutoById(@Param('id') autoId: number) {
    return await this.autosService.getAutoById(autoId);
  }
}
