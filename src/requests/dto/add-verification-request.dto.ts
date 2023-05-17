export class AddVerificationRequestDto {
  readonly ClientIntegrationId?: string;
  readonly ClientPhone?: string;
  readonly RequestSource?: string;
  readonly DocumentsUrls: string[];
  readonly RequestDealTypeId: number | string;
  readonly RequestFilialId: number | string;
}
