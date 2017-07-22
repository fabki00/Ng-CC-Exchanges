import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchMarket'
})
export class SearchMarketSummariesPipe implements PipeTransform {

  transform(value: any, term: string): any {
    if (!value || term === '') {
      return value;
    }
    return value.filter(flt => flt.MarketName.toUpperCase().indexOf(term.toUpperCase()) > -1);
  }

}
