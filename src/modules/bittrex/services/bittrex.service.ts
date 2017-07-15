
import { BittrexTicker, BittrexResponseTicker } from '../models/bittrex-ticker';
import { BittrexTickers } from '../models/bittrex-tickers';

import { Bittrex } from '../models/bittrex';
import { BittrexMarkets} from '../models/bittrex-markets';
import { BittrexCurrencies} from '../models/bittrex-currencies';
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BittrexService {
    _tickers: BittrexTicker[] = [];
    _currencies: BittrexCurrencies;
    _markets: BittrexMarkets;
    _marketsNames: string[] = [];

constructor(private _http: Http) {}
    getMarketsNames(): Observable<string[]>  {
         return this._http.get('https://bittrex.com/api/v1.1/public/getmarkets')
                   .map(response => {
                       const arr = [];
                       response.json().result.forEach(element => {
                           arr.push(element.MarketName);
                       });
                        return arr;
                   });
    }
    getTicker(market) {
        return this._http.get(`https://bittrex.com/api/v1.1/public/getticker?market=${market}`)
                    .map(response => response.json() as BittrexResponseTicker);
    }

    getMarkets(): Observable<BittrexMarkets> {
        return this._http.get('https://bittrex.com/api/v1.1/public/getmarkets')
                    .map(response => response.json() as BittrexMarkets);
    }
    getCurrencies(): Observable<BittrexCurrencies> {
        return this._http.get('https://bittrex.com/api/v1.1/public/getcurrencies')
                    .map(response => response.json() as BittrexCurrencies);
    }
    /**Common Methode */
    private handleError(error) {
        console.error(error);
    }
}
