import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limitP?: any): any {
    if(!value) {
      return null;
    }
    let limit = (limitP) ? limitP : 50;
    return value.substr(0, limit) + '......';
  }

}
