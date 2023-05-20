import { HttpCode, Injectable } from '@nestjs/common';
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

    if (clients?.Clients.length === 0) {
      await firstValueFrom(
        await this.clientsService.addClient({
          phoneNumber,
        }),
      );
    }

    const verificationCode = (
      Math.floor(Math.random() * (99999 - 10000)) + 10000
    ).toString();
    await this.clientRedis.set(phoneNumber, verificationCode);

    const smsRes = await this.smsRu.sendSms({
      to: phoneNumber,
      msg: verificationCode,
    });

    smsRes?.status === 'OK' ? HttpCode(200) : HttpCode(500);
    return { status: smsRes?.status === 'OK' };
  }

  async checkVerificationCode({ phoneNumber, verificationCode }) {
    const redisVerificationCode = await this.clientRedis.get(phoneNumber);
    let status = false;
    let data = {};

    if (redisVerificationCode !== verificationCode) return { status, data };

    const clients = await firstValueFrom(
      await this.clientsService.getAllClients({
        phoneNumber,
      }),
    );

    if (clients?.Clients?.[0]) {
      await this.clientRedis.del(phoneNumber);
      status = true;
      data = clients?.Clients?.[0];
    }

    return { status, data };
  }
}
