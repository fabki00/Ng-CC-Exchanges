/* Bittrex import*/
import { BittrexMarketSummaries, BittrexMarketSummary } from '../models/bittrex-market-summaries';
import { BittrexTicker, BittrexResponseTicker } from '../models/bittrex-ticker';
import { BittrexCurrencies} from '../models/bittrex-currencies';
import { BittrexOrderBook} from '../models/bittrex-order-book';
import { BittrexTickers } from '../models/bittrex-tickers';
import { BittrexMarkets} from '../models/bittrex-markets';
import { Bittrex } from '../models/bittrex';
/* Angular import */
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
/* Rxjs Import */
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class BittrexService {
constructor(private _http: Http) {}
/* OrderBook */
    getOrderBook(market, type= 'both', depth= 50) {
        if (type === 'buy' || 'sell') {
             return this._http.get(`https://bittrex.com/api/v1.1/public/getorderbook?market=${market}&type=${type}&depth${depth}`)
                .map(response => response.json() as BittrexOrderBook);
        }
    }
/* Ticker */
    getTicker(market): Observable<BittrexResponseTicker> {
        return this._http.get(`https://bittrex.com/api/v1.1/public/getticker?market=${market}`)
                    .map(response => response.json() as BittrexResponseTicker);
    }
/* Markets */
    getMarkets(): Observable<BittrexMarkets> {
        return this._http.get('https://bittrex.com/api/v1.1/public/getmarkets')
                    .map(response => response.json() as BittrexMarkets);
    }
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
    getMarketSummaries(): Observable<BittrexMarketSummaries>  {
        return this._http.get('https://bittrex.com/api/v1.1/public/getmarketsummaries')
                    .map(response => response.json() as BittrexMarketSummaries);
    }
    getMarketSummary(market): Observable<BittrexMarketSummary>  {
        return this._http.get(`https://bittrex.com/api/v1.1/public/getmarketsummary?market=${market}`)
                    .map(response => response.json().result[0] as BittrexMarketSummary);
    }
/* Currency */
    getCurrencies(): Observable<BittrexCurrencies> {
        return this._http.get('https://bittrex.com/api/v1.1/public/getcurrencies')
                    .map(response => response.json() as BittrexCurrencies);
    }
/**Private Methode */
    private handleError(error) {
        console.error(error);
    }
}
