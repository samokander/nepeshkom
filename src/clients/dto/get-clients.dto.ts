export class GetClientsDto {
  readonly phoneNumber: string;
  readonly passportSeries?: string;
  readonly passportNumber?: string;
  readonly birthData?: Date | string;
  readonly integrationid: string;
}
