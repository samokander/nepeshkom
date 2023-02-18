import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { env } from 'src/const';
import { NewRequestDto } from './dto/new-request.dto';
import { RequestInfoDto } from './dto/request-info.dto';
import { addRentRequestDto } from 'src/requests/dto/add-rent-request.dto';

@Injectable()
export class RequestsService {
    constructor(private readonly httpService: HttpService) {}
    
    async addRequest(newRequestDto: NewRequestDto) {
        let newRequestParams = {
            ClientIntegrationId: newRequestDto.clientIntegrationId,
            InputData: newRequestDto.inputData,
        }
        return this.httpService.post(
            env.xprokatApiUrl,
            {
                ApiKey: env.xprokatApiKey,
                ApiVersion: 0,
                Method: 'AddClient',
                Parameters: newRequestParams,
            }
        )
        .pipe(
            map((response) => 
              response.data.Result ? response.data.Result : response.data.Errors,
            ),
        );  
    }

    async getRequestInfo(requestInfoDto: RequestInfoDto) {
        let requestInfoParams = {
            ClientIntegrationId: requestInfoDto.clientIntegrationId,
            ObjectId: requestInfoDto.objectId,
        }
        return this.httpService.post(
            env.xprokatApiUrl,
            {
                ApiKey: env.xprokatApiKey,
                ApiVersion: 0,
                Method: 'GetRequestInfo',
                Parameters: requestInfoParams,
            }
        )
        .pipe(
            map((response) => 
              response.data.Result ? response.data.Result : response.data.Errors,
            ),
        );  
    }

    async addRentRequest(requestRentDto: addRentRequestDto) {
        let requestRentParams = {
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
        }
        return this.httpService
        .post(
            env.xprokatApiUrl,
            {
                ApiKey: env.xprokatApiKey,
                ApiVersion: 0,
                Method: 'AddRentRequest',
                Parameters: requestRentParams,
            }
        )
        .pipe(
            map((response) => 
              response.data.Result ? response.data.Result : response.data.Errors,
            ),
        );  
    }

    async getRentRequestInfo(rentRequestInfoDto: RequestInfoDto) {
        let requestInfoParams = {
            ClientIntegrationId: rentRequestInfoDto.clientIntegrationId,
            ObjectId: rentRequestInfoDto.objectId,
        }
        return this.httpService.post(
            env.xprokatApiUrl,
            {
                ApiKey: env.xprokatApiKey,
                ApiVersion: 0,
                Method: 'GetRentRequestInfo',
                Parameters: requestInfoParams,
            }
        )
        .pipe(
            map((response) => 
              response.data.Result ? response.data.Result : response.data.Errors,
            ),
        );  
    }
}
