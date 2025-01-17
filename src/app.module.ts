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
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { ModelsModule } from './models/models.module';
import { ContentPagesService } from './content-pages/content-pages.service';
import { ContentPagesModule } from './content-pages/content-pages.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { SMSRuModule } from 'node-sms-ru/nestjs';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    HttpModule,
    ClientsModule,
    AutosModule,
    RequestsModule,
    ModelsModule,
    ContentPagesModule,
    AuthModule,
  ],
  controllers: [
    AppController,
    ClientsController,
    AutosController,
    RequestsController,
  ],
  providers: [
    AppService,
    ClientsService,
    AutosService,
    RequestsService,
    AuthService,
  ],
})
export class AppModule {}
