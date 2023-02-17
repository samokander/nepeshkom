import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsService } from './clients/clients.service';
import { ClientsModule } from './clients/clients.module';
import { HttpModule } from '@nestjs/axios';
import { AutosService } from './autos/autos.service';
import { AutosModule } from './autos/autos.module';
import { ClientsController } from './clients/clients.controller';
import { AutosController } from './autos/autos.controller';
import { RequestsController } from './requests/requests.controller';
import { RequestsService } from './requests/requests.service';
import { RequestsModule } from './requests/requests.module';

@Module({
  imports: [HttpModule, ClientsModule, AutosModule, RequestsModule],
  controllers: [AppController, ClientsController, AutosController, RequestsController],
  providers: [AppService, ClientsService, AutosService, RequestsService],
})
export class AppModule {}
