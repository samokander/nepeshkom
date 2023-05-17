import { Injectable } from '@nestjs/common';
import { SMSRu } from 'node-sms-ru';
import { ClientsService } from 'src/clients/clients.service';
import { firstValueFrom } from 'rxjs';
import { createClient } from 'redis';

require('dotenv').config();

@Injectable()
export class AuthService {
  constructor(private readonly clientsService: ClientsService) {
    // const smsRu = new SMSRu(process.env.SMS_API_KEY)
    this.clientRedis.connect();
  }

  private readonly smsRu = new SMSRu(process.env.SMS_API_KEY);
  private readonly clientRedis = createClient();

  async getVerificationCode({ phoneNumber }) {
    const clients = await firstValueFrom(
      await this.clientsService.getAllClients({
        phoneNumber,
      }),
    );

    console.log(clients);

    if (clients?.Clients.length === 0) {
      const res = await firstValueFrom(
        await this.clientsService.addClient({
          phoneNumber,
        }),
      );

      console.log(res);
    }

    const verificationCode = Math.floor(Math.random() * 100000).toString();
    await this.clientRedis.set(phoneNumber, verificationCode);

    return this.smsRu.sendSms({
      to: phoneNumber,
      msg: verificationCode,
    });
  }

  async checkVerificationCode({ phoneNumber, verificationCode }) {
    const redisVerificationCode = this.clientRedis.get(phoneNumber);

    if (redisVerificationCode === verificationCode) {
      await this.clientRedis.del(phoneNumber);
      return true;
    } else {
      return false;
    }
  }
}