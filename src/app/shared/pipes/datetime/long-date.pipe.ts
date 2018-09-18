import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'longDate'
})
export class LongDatePipe implements PipeTransform {
  transform(value: Date, args?: boolean): any {
    return moment(value).format('MMMM DD YYYY, h:mm:ss a');
  }
}
