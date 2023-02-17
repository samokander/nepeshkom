import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { env } from 'src/const';
import { SearchAutoInputDto } from './dto/search-auto-input.dto';

@Injectable()
export class AutosService {
  constructor(private readonly httpService: HttpService) {}

  async getAllAutos() {
    return this.httpService
      .post(env.xprokatApiUrl, {
        ApiKey: env.xprokatApiKey,
        ApiVersion: 500,
        Method: 'GetAutos',
        Parameters: {},
      })
      .pipe(
        map((response) =>
          response.data.Result ? response.data.Result : response.data.Errors,
        ),
      );
  }

  async getAutoById(autoId: number) {
    return this.httpService
      .post(env.xprokatApiUrl, {
        ApiKey: env.xprokatApiKey,
        ApiVersion: 500,
        Method: 'GetAutoInfo',
        Parameters: {
          ObjectId: autoId,
        },
      })
      .pipe(
        map((response) =>
          response.data.Result ? response.data.Result : response.data.Errors,
        ),
      );
  }

  async searchAutos(params: SearchAutoInputDto) {
    let searchAutosParams = {
      dateFrom: params.dateFrom,
      dateTo: params.dateTo,
      autoClasses: params.autoClasses,
      filialId: params.filialId,
      brands: params.brands,
      colors: params.colors,
      transmissions: params.transmissions,
      bodyTypes: params.bodyTypes,
      privodTypes: params.privodTypes,
      expectedProlongation: params.expectedProlongation,
      viewInDay: params.viewInDay,
      viewMovements: params.viewMovements,
      viewRepairs: params.viewRepairs,
      CleanRequestReservs: params.CleanRequestReservs,
      DefaultPriceFrom: params.DefaultPriceFrom,
      DefaultPriceTo: params.DefaultPriceTo,
      PowerLSFrom: params.PowerLSFrom,
      PowerLsTo: params.PowerLsTo,
    }
    return this.httpService
      .post(env.xprokatApiUrl, {
        ApiKey: env.xprokatApiKey,
        ApiVersion: 500,
        Method: 'SearchAutos',
        Parameters: searchAutosParams,
      })
      .pipe(
        map((response) =>
          response.data.Result ? response.data.Result : response.data.Errors,
        ),
      );
  }

  async getAutoInfo(autoId: number) {
    return this.httpService
      .post(env.xprokatApiUrl, {
        ApiKey: env.xprokatApiKey,
        ApiVersion: 500,
        Method: 'GetAutoInfo',
        Parameters: {
          ObjectId: autoId
        },
      })
      .pipe(
        map((response) => 
          response.data.Result ? response.data.Result : response.data.Errors,
        ),
      );
  }
}
