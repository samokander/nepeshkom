export class GetAutoUsedIntervalsDto {
    readonly objectId: number;
    readonly dateFrom: Date | string;
    readonly dateTo: Date | string;
}