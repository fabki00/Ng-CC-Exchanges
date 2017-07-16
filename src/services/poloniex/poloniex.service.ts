import { PoloniexTicker } from './../../models/poloniex/poloniex-ticker';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
/* Rxjs Import */
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class PoloniexService {

constructor(private _http: Http) { }
getReturnTicker() {
   return this._http.get('https://poloniex.com/public?command=returnTicker')
                    .map(response => response.json());
}
getMarketsNames(): Observable<string[]> {
    return this.getReturnTicker()
              .map(response => {
        const pairs = response;
        const marketsNames = [];
        for (const key in pairs) {
            if (pairs.hasOwnProperty(key)) {
                marketsNames.push(key);
            }
        }
        return marketsNames;
    });
}
 getTicker(): Observable<PoloniexTicker[]> {
    return this.getReturnTicker()
        .map(response => {
        const pairs = response.json();
        const finalPoloniexJSon = [];
        for (const key in pairs) {
            if (pairs.hasOwnProperty(key)) {
                const jsonString = '{"market":"' + key + '",' + JSON.stringify(pairs[key]).replace('{', '');
                try {
                        if (JSON.parse(jsonString)) {
                            finalPoloniexJSon.push(JSON.parse(jsonString));
                        }
                    }catch (e) {
                        console.error('error json poloniex', jsonString);
                    }
            }
        }
        return finalPoloniexJSon;
    });
}
}
