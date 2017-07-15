import { BittrexService } from './../bittrex/services/bittrex.service';
import { BittrexTicker } from '../bittrex/models/bittrex-ticker';
import { BittrexCurrencies } from '../bittrex/models/bittrex-currencies';
import { BittrexMarkets } from '../bittrex/models/bittrex-markets';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.css']
})
export class ExchangesComponent implements OnInit {
  _bittrexMarkets: Subject<BittrexMarkets[]>;
  _bittrexCurrecies: BittrexCurrencies[] = [];
  _bittrexTickers: BittrexTicker[] = [];
  _marketsNames: string[] = [];
  constructor(private _bittrexService: BittrexService) { }

  ngOnInit() {
    this.getMarketsNames();
  }
  getMarketsNames() {
    this._bittrexService.getMarketsNames().subscribe(
      data => this._marketsNames = data,
      error => console.error(error)
    );
  }
  handleError(error) {
    console.error(error);
  }
}
