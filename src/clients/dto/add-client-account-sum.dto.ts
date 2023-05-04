
export class AddSumDto {
    readonly clientIntegrationId?: string;
    readonly clientPhone?: string;
    readonly sum: number;
    readonly sourceCode: number;
    readonly defaultFilialId: number;
    readonly defaultCompanyId: number;
    readonly comment?: string;
    readonly tokenInfo?: TokenInfo;
}


interface TokenInfo {
    companyId: number;
    serviceCode: string;
    recurrentCode: string;
    token: string;
}