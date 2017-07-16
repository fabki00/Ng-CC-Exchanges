import { YobitService } from './../../services/yobit/yobit.service';
import { PoloniexService } from './../../services/poloniex/poloniex.service';
import { BittrexTicker } from './../../models/bittrex/bittrex-ticker';
import { BittrexCurrencies } from './../../models/bittrex/bittrex-currencies';
import { BittrexMarkets } from './../../models/bittrex/bittrex-markets';
import { BittrexService } from '../../services/bittrex/bittrex.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.css']
})
export class ExchangesComponent implements OnInit {
  _poloniexMarketsNames: string[] = [];
  _bittrexMarketsNames: string[] = [];
  _yobitMarketsNames: string[] = [];
  constructor(private _bittrexService: BittrexService,
    private _poloniexService: PoloniexService,
    private _yobitService: YobitService) { }

  ngOnInit() {
    this.getYobitMarketsNames();
    this.getBittrexMarketsNames();
    this.getPoloniexMarketsNames();
  }
  getYobitMarketsNames() {
    this._yobitService.getMarketsNames().subscribe(
      data => this._yobitMarketsNames = data,
      error => console.error(error)
    );
  }
  getPoloniexMarketsNames() {
    this._poloniexService.getMarketsNames().subscribe(
      data => this._poloniexMarketsNames = data,
      error => console.error(error)
    );
  }
  getBittrexMarketsNames() {
    this._bittrexService.getMarketsNames().subscribe(
      data => this._bittrexMarketsNames = data,
      error => console.error(error)
    );
  }
  handleError(error) {
    console.error(error);
  }
}
