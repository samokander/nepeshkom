import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { env } from 'src/const';
import { NewRequestDto } from './dto/new-request.dto';
import { RequestInfoDto } from './dto/request-info.dto';
import { addRentRequestDto } from 'src/requests/dto/add-rent-request.dto';
import { REQUEST_SOURCE } from './consts';
import { AddVerificationRequestDto } from './dto/add-verification-request.dto';

@Injectable()
export class RequestsService {
  constructor(private readonly httpService: HttpService) {}

  async addRequest(newRequestDto: NewRequestDto) {
    const newRequestParams = {
      ClientIntegrationId: newRequestDto.clientIntegrationId,
      InputData: newRequestDto.inputData,
    };
    return this.httpService
      .post(env.xprokatApiUrl, {
        ApiKey: env.xprokatApiKey,
        ApiVersion: 0,
        Method: 'AddRequest',
        Parameters: newRequestParams,
      })
      .pipe(
        map((response) =>
          response.data.Result ? response.data.Result : response.data.Errors,
        ),
      );
  }

  async getRequestInfo(requestInfoDto: RequestInfoDto) {
    const requestInfoParams = {
      ClientIntegrationId: requestInfoDto.clientIntegrationId,
      ObjectId: requestInfoDto.objectId,
    };
    return this.httpService
      .post(env.xprokatApiUrl, {
        ApiKey: env.xprokatApiKey,
        ApiVersion: 0,
        Method: 'GetRequestInfo',
        Parameters: requestInfoParams,
      })
      .pipe(
        map((response) =>
          response.data.Result ? response.data.Result : response.data.Errors,
        ),
      );
  }

  async addRentRequest(requestRentDto: addRentRequestDto) {
    const requestRentParams = {
      ClientIntegrationId: requestRentDto.clientIntegrationId,
      ClientPhone: requestRentDto.clientPhone,
      DocumentsUrls: requestRentDto.documentsUrls,
      RequestDealTypeId: requestRentDto.requestDealTypeId,
      RequestFilialId: requestRentDto.requestFilialId,
      RentFilialFrom: requestRentDto.rentFilialFrom,
      RentFilialTo: requestRentDto.rentFilialTo,
      RentFromTime: requestRentDto.rentFromTime,
      RentToTime: requestRentDto.rentToTime,
      TarifId: requestRentDto.tarifId,
      AutoId: requestRentDto.autoId,
      DeliveryAddress: requestRentDto.deliveryAddress,
      ReturnAddress: requestRentDto.returnAddress,
      RequestSource: REQUEST_SOURCE,
    };
    console.log(requestRentDto)
    return this.httpService
      .post(env.xprokatApiUrl, {
        ApiKey: env.xprokatApiKey,
        ApiVersion: 0,
        Method: 'AddRentRequest',
        Parameters: requestRentParams,
      })
      .pipe(
        map((response) =>
          response.data.Result ? response.data.Result : response.data.Errors,
        ),
      );
  }

  async getRentRequestInfo(rentRequestInfoDto: RequestInfoDto) {
    const requestInfoParams = {
      ClientIntegrationId: rentRequestInfoDto.clientIntegrationId,
      ObjectId: rentRequestInfoDto.objectId,
    };
    return this.httpService
      .post(env.xprokatApiUrl, {
        ApiKey: env.xprokatApiKey,
        ApiVersion: 0,
        Method: 'GetRentRequestInfo',
        Parameters: requestInfoParams,
      })
      .pipe(
        map((response) =>
          response.data.Result ? response.data.Result : response.data.Errors,
        ),
      );
  }

  async addVerificationRequest(
    addVerificationRequest: AddVerificationRequestDto,
  ) {
    const params = {
      ClientIntegrationId: addVerificationRequest.ClientIntegrationId,
      ClientPhone: addVerificationRequest.ClientPhone,
      RequestSource: addVerificationRequest.RequestSource,
      DocumentUrls: addVerificationRequest.DocumentsUrls,
      RequestDealTypeId: addVerificationRequest.RequestDealTypeId,
      RequestFilialId: addVerificationRequest.RequestFilialId,
    };

    return this.httpService.post(env.xprokatApiUrl, {
      ApiKey: env.xprokatApiKey,
      ApiVersion: 0,
      Method: 'AddVerificationRequest',
      Parameters: params,
    });
  }
}
