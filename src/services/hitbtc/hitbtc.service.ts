import { HitBtcSymbols, HitBtcSymbol } from './../../models/hitbtc/hitbtc-symbols';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/* Rxjs Import */
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HitbtcService {
_timeOut = 10000;
constructor(private _http: Http) { }
  getSymbols(): Observable<HitBtcSymbols> {
    return this._http.get('https://api.hitbtc.com/api/1/public/symbols')
                     .map(response => response.json() as HitBtcSymbols)
                     .timeout(this._timeOut);
  }
  getMarketsNames(): Observable<string[]> {
    return this.getSymbols()
              .map(response => {
                const marketsNames = [];
                response.symbols.forEach(el => {
                  marketsNames.push(el.symbol.replace(el.commodity, el.commodity + '-'));
                });
              return marketsNames;
    }).timeout(this._timeOut);
  }
}
