import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchMarket'
})
export class SearchMarketPipe implements PipeTransform {

  transform(value: any, term: string): any {
    if (!value || value === '') {
      return value;
    }else {
      return value.filter(flt => flt.indexOf(term.toUpperCase()) > -1);
    }
  }

}
