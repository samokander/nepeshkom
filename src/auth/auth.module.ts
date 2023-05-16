import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClientsModule } from 'src/clients/clients.module';
import { ClientsService } from 'src/clients/clients.service';

@Module({
  imports: [HttpModule],
  controllers: [AuthController],
  providers: [AuthService, ClientsService],
})
export class AuthModule {}
