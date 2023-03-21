import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { env } from 'src/const';
import { AddSumDto } from './dto/add-client-account-sum.dto';
import { AddClientDto } from './dto/add-client.dto';

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

  async addClient(newClientDto: AddClientDto) {
    let newClientParams = {
      PhoneNumber: newClientDto.phoneNumber,
      ClientName: newClientDto.clientName,
      PromoCode: newClientDto.promoCode,
    }
    return this.httpService.post(
      env.xprokatApiUrl,
      {
        ApiKey: env.xprokatApiKey,
        ApiVersion: 0,
        Method: 'AddClient',
        Parameters: newClientParams,
      },
    )
    .pipe(
      map((response) => 
        response.data.Result ? response.data.Result : response.data.Errors,
      ),
    );
  }

  async addClientAccountSum(addSumDto: AddSumDto){
    let addSumParams = {
      clientIntegrationId: addSumDto.clientIntegrationId,
      clientPhone: addSumDto.clientPhone,
      sum: addSumDto.sum,
      sourceCode: addSumDto.sourceCode,
      defaultFilialId: addSumDto.defaultFilialId,
      defaultCompanyId: addSumDto.defaultCompanyId,
      comment: addSumDto.comment,
      tokenInfo: addSumDto.tokenInfo,
    }
    return this.httpService.post(
      env.xprokatApiUrl,
      {
        ApiKey: env.xprokatApiKey,
        ApiVersion: 0,
        Method: 'AddClientAccountSum',
        Parameters: addSumParams,
      },
    )
  }

}
