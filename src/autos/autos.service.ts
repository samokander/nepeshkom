import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { env } from 'src/const';
import { SearchAutoInputDto } from './dto/search-auto-input.dto';
import { GetAutoUsedIntervalsDto } from './dto/get-auto-used-intervals.dto';
import { SearchAutosWithFullAutoDataDto } from './dto/search-autos-with-full-auto-data.dto';
import { DictValueDto } from './dto/dict-value.dto';
import { ObjectRequestParams } from './dto/object-request-params.dto';

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
    const searchAutosParams = {
      DateFrom: params.dateFrom,
      DateTo: params.dateTo,
      AutoClasses: params.autoClasses,
      FilialId: params.filialId,
      Brands: params.brands,
      Colors: params.colors,
      Transmissions: params.transmissions,
      BodyTypes: params.bodyTypes,
      PrivodTypes: params.privodTypes,
      ExpectedProlongation: params.expectedProlongation,
      ViewInDay: params.viewInDay,
      ViewMovements: params.viewMovements,
      ViewRepairs: params.viewRepairs,
      CleanRequestReservs: params.cleanRequestReservs,
      DefaultPriceFrom: params.defaultPriceFrom,
      DefaultPriceTo: params.defaultPriceTo,
      PowerLSFrom: params.powerLSFrom,
      PowerLsTo: params.powerLsTo,
    };
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

  async getAutoInfo(id: ObjectRequestParams) {
    return this.httpService
      .post(env.xprokatApiUrl, {
        ApiKey: env.xprokatApiKey,
        ApiVersion: 500,
        Method: 'GetAutoInfo',
        Parameters: id,
      })
      .pipe(
        map((response) =>
          response.data.Result ? response.data.Result : response.data.Errors,
        ),
      );
  }

  async getAutoUsedIntervals(getIntervalsDto: GetAutoUsedIntervalsDto) {
    const autoIntervalsParams = {
      ObjectId: getIntervalsDto.objectId,
      DateFrom: getIntervalsDto.dateFrom,
      DateTo: getIntervalsDto.dateTo,
    };
    return this.httpService
      .post(env.xprokatApiUrl, {
        ApiKey: env.xprokatApiKey,
        ApiVersion: 500,
        Method: 'GetAutoUsedIntervals',
        Parameters: autoIntervalsParams,
      })
      .pipe(
        map((response) =>
          response.data.Result ? response.data.Result : response.data.Errors,
        ),
      );
  }

  async searchAutosWithFullAutoData(
    searchWithFulLData,
  ) {
    return this.httpService
      .post(env.xprokatApiUrl, {
        ApiKey: env.xprokatApiKey,
        ApiVersion: 500,
        Method: 'SearchAutosWithFullAutoData',
        Parameters: searchWithFulLData,
      })
      .pipe(
        map((response) =>
          response.data.Result ? response.data.Result : response.data.Errors,
        ),
      );
  }

  async getFilterParams() {
    return this.httpService
      .post(env.xprokatApiUrl, {
        ApiKey: env.xprokatApiKey,
        ApiVersion: 500,
        Method: 'GetFilterParams',
        Parameters: {},
      })
      .pipe(
        map((response) =>
          response.data.Result ? response.data.Result : response.data.Errors,
        ),
      );
  }
}
