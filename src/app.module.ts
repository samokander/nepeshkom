import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsService } from './clients/clients.service';
import { ClientsModule } from './clients/clients.module';
import { HttpModule } from '@nestjs/axios';
import { AutosService } from './autos/autos.service';
import { AutosModule } from './autos/autos.module';

@Module({
  imports: [HttpModule, ClientsModule, AutosModule],
  controllers: [AppController],
  providers: [AppService, ClientsService, AutosService],
})
export class AppModule {}
