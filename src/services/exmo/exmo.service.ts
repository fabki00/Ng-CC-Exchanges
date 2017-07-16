import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/* Rxjs Import */
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class ExmoService {
_timeOut = 120000;
constructor(private _http: Http) { }
  getPairSettings(): Observable<any> {
    return this._http.get('https://api.exmo.com/v1/pair_settings/')
                     .map(response => response.json())
                     .timeout(this._timeOut);
  }
  getMarketsNames(): Observable<string[]> {
    return this.getPairSettings()
               .map(response => {
                const marketsNames = [];
                 for (const key in response) {
                  if (response.hasOwnProperty(key)) {
                      marketsNames.push(key);
                  }
                }
                return marketsNames;
               }).timeout(this._timeOut);
  }
}
