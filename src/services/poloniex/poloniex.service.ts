import { PoloniexMarket } from './../../models/poloniex/poloniex-ticker';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
/* Rxjs Import */
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class PoloniexService {

constructor(private _http: Http) { }
    getTicker() {
        return this._http.get('https://poloniex.com/public?command=returnTicker')
            .map(response => {
                const poloniexJsonString = JSON.stringify(response.json()).split(/(:{|},)/);
                const reconstructPoloniex = [];
                const finalPoloniex = [];
                const finalPoloniexJSon = [];
                poloniexJsonString.forEach(elem => {
                    const el = elem.replace(/({|})/, '');
                    if (el.length > 1) {
                        reconstructPoloniex.push(el);
                    }
                });
                for (let index = 1; index < reconstructPoloniex.length; index += 2) {
                    const market = reconstructPoloniex[index - 1].replace('_', '-');
                    const jsonString = '{"market":' + market + ',' + reconstructPoloniex[index] + '}';
                    try {
                        if (JSON.parse(jsonString)) {
                            finalPoloniexJSon.push(JSON.parse(jsonString));
                        }
                    }catch(e) {
                    }
                }
                return finalPoloniexJSon;
            });
    }
    getMarketsNames() {
        return this._http.get('https://poloniex.com/public?command=returnTicker')
            .map(response => {
                const poloniexJsonString = JSON.stringify(response.json()).split(/(:{|},)/);
                const poloniexMarketsNames = [];
                poloniexJsonString.forEach(elem => {
                    const el = elem.replace(/({|})/, '');
                    if (el.indexOf('_') > 1) {
                        poloniexMarketsNames.push(el.replace('"', ''));
                    }
                });
                return poloniexMarketsNames;
            });
    }
}
