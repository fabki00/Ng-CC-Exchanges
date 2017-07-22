import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchMarketName'
})
export class SearchMarketNamePipe implements PipeTransform {

  transform(value: any, term: string): any {
    if (!value || value === '') {
      return value;
    }else {
      return value.filter(flt => flt.indexOf(term.toUpperCase()) > -1);
    }
  }

}
