import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCurrencies'
})
export class SearchCurrenciesPipe implements PipeTransform {

  transform(value: any, term: string): any {
    if (!value || term === '') {
      return value;
    }
    return value.filter(flt => flt.CurrencyLong.toUpperCase().indexOf(term.toUpperCase()) > -1);
  }

}
