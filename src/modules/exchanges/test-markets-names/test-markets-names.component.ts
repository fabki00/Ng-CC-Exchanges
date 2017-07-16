import { HitbtcService } from './../../../services/hitbtc/hitbtc.service';
import { YobitService } from './../../../services/yobit/yobit.service';
import { Component, OnInit } from '@angular/core';

import { PoloniexService } from './../../../services/poloniex/poloniex.service';
import { BittrexService } from './../../../services/bittrex/bittrex.service';

@Component({
  selector: 'app-test-markets-names',
  templateUrl: './test-markets-names.component.html',
  styleUrls: ['./test-markets-names.component.css']
})
export class TestMarketsNamesComponent implements OnInit {
  _poloniexMarketsNames: string[] = [];
  _bittrexMarketsNames: string[] = [];
  _yobitMarketsNames: string[] = [];
  _hitbtcMarketsNames: string[] = [];
  constructor(private _bittrexService: BittrexService,
    private _poloniexService: PoloniexService,
    private _yobitService: YobitService,
    private _hitbtcService: HitbtcService) { }

  ngOnInit() {
    this.getYobitMarketsNames();
    this.getBittrexMarketsNames();
    this.getPoloniexMarketsNames();
    this.getHitbtcMarketsNames();
  }
  getHitbtcMarketsNames() {
    this._hitbtcService.getMarketsNames().subscribe(
      val => this._hitbtcMarketsNames = val,
      error => this.handleError(error)
    );
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
