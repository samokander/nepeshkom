import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { env } from 'src/const';
import { NewRequestDto } from './dto/new-request.dto';
import { RequestInfoDto } from './dto/request-info.dto';

@Injectable()
export class RequestsService {
    constructor(private readonly httpService: HttpService) {}
    
    async addRequest(newRequestDto: NewRequestDto) {
        let newRequestParams = {
            clientIntegrationId: newRequestDto.clientIntegrationId,
            inputData: newRequestDto.inputData,
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
            clientIntegrationId: requestInfoDto.clientIntegrationId,
            objectId: requestInfoDto.objectId,
        }
        return this.httpService.post(
            env.xprokatApiUrl,
            {
                ApiKey: env.xprokatApiKey,
                ApiVersion: 0,
                Method: 'AddClient',
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
