export class addRentRequestDto {
  clientIntegrationId?: number;
  clientPhone?: number;
  //Массив строк, каждая из которых является ссылкой на документ,
  //доступный для скачивания по http методом GET
  documentsUrls: Array<string>;
  //Код типа заявки, которая будет создана в системе
  //Значение параметра RequestDealTypeId можно посмотреть либо в интерфейсе CRM
  // либо запросить методом @GetDictValues с кодом справочника dealTypes.
  requestDealTypeId: number;
  // Код филиала, в который будет помещена созданная заявка
  requestFilialId: number;
  // Филиал передачи авто клиенту
  rentFilialFrom: number;
  // Филиал возврата авто клиентом. Если не задано, то берется значение RentFilialFrom
  rentFilialTo?: number;
  //Дата начала аренда в формате dd.MM.yyyy HH:mm:ss в UTC
  rentFromTime: string | Date;
  // код тарифа
  tarifId: number;
  // код бронируемого автомобиля
  autoId: number;
  deliveryAddress?: string;
  returnAddress?: string;
  requestSource?: string;
}
