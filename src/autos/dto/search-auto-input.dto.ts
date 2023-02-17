export class SearchAutoInputDto {
    //  строка в формате:
    //  "YYYY.MM.DD HO:MI:SE"
    readonly dateFrom?: Date | string;
    readonly dateTo?: Date | string;
    //список кодов классов ТС
    readonly autoClasses?: Array<string>;
    readonly filialId?: number;
    readonly brands?: Array<string>;
    readonly colors?: Array<string>;
    readonly transmissions?: Array<string>;
    readonly bodyTypes?: Array<string>;
    readonly privodTypes?: Array<string>;
    // флаг - отобразить ТС, только с ВЫКЛЮЧЕННЫМ флагом "Ожадает продления"
    readonly expectedProlongation?: boolean;
    readonly viewInDay?: boolean;
    //отобразить ТС у сотрудников
    readonly viewMovements?: boolean;
    // отобразить ТС на ремонта
    readonly viewRepairs?: boolean;
    //отобразить ТС без заявок на указанные даты
    readonly CleanRequestReservs?: boolean;
    //базовая цена ОТ (применятся в фильтре если > 0)
	readonly DefaultPriceFrom?: number;
	//базовая цена ДО (применятся в фильтре если > 0) 
	readonly DefaultPriceTo?: number;
	//мощность двигателя ОТ (применятся в фильтре если > 0)
	readonly PowerLSFrom?: number;
	//мощность двигателя ДО (применятся в фильтре если > 0)
	readonly PowerLsTo?: number;
}