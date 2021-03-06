import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
/* Rxjs Import */
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class YobitService {
_timeOut = 120000;
constructor(private _http: Http) { }
getMarketsNames(): Observable<string[]> {
    return this._http.get('https://yobit.net/api/3/info')
        .map(response => {
            const pairs = response.json().pairs;
            const marketsNames = [];
            for (const key in pairs) {
                if (pairs.hasOwnProperty(key)) {
                    marketsNames.push(key);
                }
            }
        return marketsNames;
        }).timeout(this._timeOut);
    }
getMarketsNamesFormatted(): Observable<string[]> {
  return this.getMarketsNames()
              .map(response => {
                const newMarketsNames = [];
                response.forEach(el => {
                const split = el.toLocaleUpperCase().split('_');
                const newKey = split[1] + '-' + split[0];
                 newMarketsNames.push(newKey);
                });
                return newMarketsNames;
              });
    }
}
