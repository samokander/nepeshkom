import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { env } from 'src/const';

@Injectable()
export class ClientsService {
  constructor(private readonly httpService: HttpService) {}
  async getAllClients() {
    return this.httpService
      .post(
        env.xprokatApiUrl,
        {
          ApiKey: env.xprokatApiKey,
          ApiVersion: 0,
          Method: 'GetClients',
          Parameters: {
            PhoneNumber: '70000000000',
          },
        },
      )
      .pipe(
        map((response) =>
          response.data.Result ? response.data.Result : response.data.Errors,
        ),
      );
  }
}
