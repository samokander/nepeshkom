import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { env } from 'src/const';
import { NewRequestDto } from './dto/new-request.dto';
import { RequestInfoDto } from './dto/request-info.dto';
import { addRentRequestDto } from 'src/requests/dto/add-rent-request.dto';
import { AddVerificationRequestDto } from './dto/add-verification-request.dto';
import { SimpleOutputDto } from 'src/dto/simple-outpu.dto';
import { GetRentRequestsDto } from './dto/get-rent-requests.dto';

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
      TarifId: requestRentDto.tarifId,
      AutoId: requestRentDto.autoId,
      DeliveryAddress: requestRentDto.deliveryAddress,
      ReturnAddress: requestRentDto.returnAddress,
      RequestSource: requestRentDto.requestSource,
    };
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

  async getRentRequests(getRentRequestsDto: GetRentRequestsDto) {
    const params = {
      ClientIntegrationId: getRentRequestsDto.clientIntegrationId,
      RentRequestDealTypeId: getRentRequestsDto.rentRequestDealTypeId,
      States: getRentRequestsDto.states,
    };
    return this.httpService
      .post(env.xprokatApiKey, {
        ApiKey: env.xprokatApiKey,
        ApiVersion: 0,
        Method: 'GetRentRequests',
        Parameters: params,
      })
      .pipe(
        map((response) =>
          response.data.Result ? response.data.Result : response.data.Errors,
        ),
      );
  }
}
