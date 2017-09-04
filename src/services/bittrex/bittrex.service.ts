import { BittrexCurrencies } from './../../models/bittrex/bittrex-currencies';
import { BittrexMarketSummaries, BittrexMarketSummary } from './../../models/bittrex/bittrex-market-summaries';
import { BittrexMarkets } from './../../models/bittrex/bittrex-markets';
import { BittrexResponseTicker } from './../../models/bittrex/bittrex-ticker';
import { BittrexOrderBook } from './../../models/bittrex/bittrex-order-book';
/* Bittrex import*/

/* Angular import */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
/* Rxjs Import */
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class BittrexService {
  _timeOut = 120000;
  _BASE_URL = 'http://127.0.0.1:4201/api/bittrex';

  constructor(private _http: Http) { }
  /* OrderBook */
  getOrderBook(market, type = 'both', depth = 50) {
    if (type === 'buy' || 'sell') {
      return this._http.get(this._BASE_URL + `/getorderbook?market=${market}&type=${type}&depth${depth}`)
        .map(response => response.json() as BittrexOrderBook)
        .timeout(this._timeOut);
    }
  }
  /* Ticker */
  getTicker(market): Observable<BittrexResponseTicker> {
    return this._http.get(this._BASE_URL + `/getticker?market=${market}`)
      .map(response => response.json() as BittrexResponseTicker)
      .timeout(this._timeOut);
  }
  /* Markets */
  getMarkets(): Observable<BittrexMarkets> {
    return this._http.get(this._BASE_URL + '/getmarkets')
      .map(response => response.json() as BittrexMarkets)
      .timeout(this._timeOut);
  }
  /* MarketsNames */
  getMarketsNames(): Observable<string[]> {
    return this.getMarkets()
      .map(response => {
        const marketsNames = [];
        if (response.success) {
          response.result.forEach(element => {
            marketsNames.push(element.MarketName);
          });
          return marketsNames;
        }
      }).timeout(this._timeOut);
  }
  /* Market Summaries */
  getMarketSummaries(): Observable<BittrexMarketSummaries> {
    return this._http.get(this._BASE_URL + '/getmarketsummaries')
      .map(response => response.json() as BittrexMarketSummaries)
      .timeout(this._timeOut);
  }
  /* Market Summary */
  getMarketSummary(market): Observable<BittrexMarketSummary> {
    return this._http.get(this._BASE_URL + `/getmarketsummary?market=${market}`)
      .map(response => response.json().result[0] as BittrexMarketSummary)
      .timeout(this._timeOut);
  }
  /* Currency */
  getCurrencies(): Observable<BittrexCurrencies> {
    return this._http.get(this._BASE_URL + '/getcurrencies')
      .map(response => response.json() as BittrexCurrencies)
      .timeout(this._timeOut);
  }
  /**Private Methode */
  private handleError(error) {
    console.error(error);
  }
}
