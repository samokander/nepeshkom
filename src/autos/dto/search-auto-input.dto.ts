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
  readonly cleanRequestReservs?: boolean;
  //базовая цена ОТ (применятся в фильтре если > 0)
  readonly defaultPriceFrom?: number;
  //базовая цена ДО (применятся в фильтре если > 0)
  readonly defaultPriceTo?: number;
  //мощность двигателя ОТ (применятся в фильтре если > 0)
  readonly powerLSFrom?: number;
  //мощность двигателя ДО (применятся в фильтре если > 0)
  readonly powerLsTo?: number;
}
