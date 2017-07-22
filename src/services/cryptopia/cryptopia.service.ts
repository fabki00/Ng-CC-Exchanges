import { CryptopiaMarkets } from './../../models/cryptopia/cryptopia-get-markets';
import { CryptopiaTradePairs } from './../../models/cryptopia/cryptopia-get-trade-pairs';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/* Rxjs Import */
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CryptopiaService {
_timeOut = 120000;
constructor(private _http: Http) { }
  getMarkets(): Observable<CryptopiaMarkets> {
    return this._http.get('https://www.cryptopia.co.nz/api/GetMarkets')
               .map(response => response.json() as CryptopiaMarkets)
               .timeout(this._timeOut);
  }
  getTradePairs(): Observable<CryptopiaTradePairs> {
    return this._http.get('https://www.cryptopia.co.nz/api/GetTradePairs')
               .map(response => response.json() as CryptopiaTradePairs)
               .timeout(this._timeOut);
  }
  getMarketsNames(): Observable<string[]> {
    return this.getTradePairs()
               .map(response => {
                const marketsNames = [];
                if (response.Success) {
                  response.Data.forEach(el => {
                    marketsNames.push(el.Label) ;
                  });
                }
                return marketsNames;
               }).timeout(this._timeOut);
  }
  getMarketsNamesFormatted(): Observable<string[]> {
    return this.getMarketsNames()
              .map(response => {
                const newMarketsNames = [];
                response.forEach(el => {
                 newMarketsNames.push(el.replace('/', '-'));
                });
                return newMarketsNames;
              });
  }
}
