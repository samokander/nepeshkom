import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// data.brands[i] = {{brands: []},...}

//  {
//    Brands: [{..}, {..}, ...],  ==>
//    ...
//  }

@Injectable()
export class FiltersInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const params = Object.keys(data);
        const filters = params.map((param) => {
          if (Array.isArray(data[param])) {
            return data[param].map((obj) => obj.Title);
          } else {
            return data[param];
          }
        });

        const response = {
          brands: filters[0],
          colors: filters[1],
          autoClassesCodes: filters[2],
          transmissions: filters[3],
          bodyTypes: filters[4],
          privodTypes: filters[5],
          defaultPriceMin: filters[6],
          defaultPriceMax: filters[7],
          modInfoPowerLSMin: filters[8],
          modInfoPowerLSMax: filters[9],
        };
        return response;
      }),
    );
  }
}
