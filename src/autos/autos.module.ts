import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { HttpModule } from '@nestjs/axios';
import { AutosController } from './autos.controller';
import { AutosService } from './autos.service';
import { FiltersInterceptor } from 'src/filters/filters.interceptor';
@Module({
  imports: [HttpModule],
  controllers: [AutosController],
  providers: [AutosService],
})
export class AutosModule {}
