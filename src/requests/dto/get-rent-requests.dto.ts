export enum RequestState {
  NEW,
  PROCESS,
  CLOSED,
}

export class GetRentRequestsDto {
  readonly ClientIntegrationId: string;
  readonly RentRequestDealTypeId: string | number;
  readonly States?: RequestState;
}
