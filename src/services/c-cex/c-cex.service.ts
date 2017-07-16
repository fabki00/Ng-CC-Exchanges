import { CcexMarketsSummaries } from './../../models/c-cex/c-cex-get-markets-summaries';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/* Rxjs Import */
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CCexService {

constructor(private _http: Http) { }
  getMarketsSummaries(): Observable<CcexMarketsSummaries> {
    return this._http.get('https://c-cex.com/t/api_pub.html?a=getmarketsummaries')
                      .map(response => response.json() as CcexMarketsSummaries)
                      .timeout(6000);
  }
  getMarketsNames(): Observable<string[]> {
    return this.getMarketsSummaries()
              .map(response => {
                const marketsNames = [];
                if (response.success) {
                  response.result.forEach(el => {
                    marketsNames.push(el.MarketName);
                  });
                  return marketsNames;
                }
              }).timeout(6000);
  }
}
