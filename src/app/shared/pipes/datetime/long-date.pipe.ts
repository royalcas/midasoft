import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'longDate'
})
export class LongDatePipe implements PipeTransform {
  transform(value: Date, args?: boolean): any {
    moment.locale('es');
    return moment(value).format('LLLL');
  }
}
