import { Module } from '@nestjs/common';

import { HttpModule } from '@nestjs/axios';
import { AutosController } from './autos.controller';
import { AutosService } from './autos.service';

@Module({
  imports: [HttpModule],
  controllers: [AutosController],
  providers: [AutosService],
})
export class AutosModule {}
