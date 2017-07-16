import { CryptopiaMarkets } from './../../models/cryptopia/cryptopia-get-markets';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/* Rxjs Import */
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CryptopiaService {
_timeOut = 10000;
constructor(private _http: Http) { }
  getMarkets(): Observable<CryptopiaMarkets> {
    return this._http.get('https://www.cryptopia.co.nz/api/GetMarkets')
               .map(response => response.json() as CryptopiaMarkets)
               .timeout(this._timeOut);
  }
  getMarketsNames(): Observable<string[]> {
    return this.getMarkets()
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
}
