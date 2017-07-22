import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { NovaExchangeMarkets } from './../../models/nova-exchange/nova-exchange-markets';

/* Rxjs Import */
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';

@Injectable()
export class NovaExchangeService {
_timeOut = 120000;
constructor(private _http: Http) { }
  getMarkets(timeNow?): Observable<NovaExchangeMarkets> {// Limited at 1 call/minute ! TODO: test timeNow .
    return this._http.get('https://novaexchange.com/remote/v2/markets/')
                     .map(response => response.json() as NovaExchangeMarkets)
                     .timeout(this._timeOut);
  }
  getMarketsNames(): Observable<string[]> {
    return this.getMarkets(Date.now())
               .map(response => {
                  const marketsNames = [];
                  if (response.status) {
                    response.markets.forEach(el => {
                      marketsNames.push(el.marketname);
                    });
                    return marketsNames;
                  }
               }).timeout(this._timeOut);
  }
getMarketsNamesFormatted(): Observable<string[]> {
  return this.getMarketsNames()
              .map(response => {
                const newMarketsNames = [];
                response.forEach(el => {
                 newMarketsNames.push(el.replace('_', '-'));
                });
                return newMarketsNames;
              });
}
}
