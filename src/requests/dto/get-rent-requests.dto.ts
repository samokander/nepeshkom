export enum RequestState {
  NEW,
  PROCESS,
  CLOSED,
}

export class GetRentRequestsDto {
  readonly clientIntegrationId: string;
  readonly rentRequestDealTypeId: string | number;
  readonly states?: RequestState;
}
