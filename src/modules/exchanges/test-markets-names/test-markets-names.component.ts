import { CryptopiaService } from './../../../services/cryptopia/cryptopia.service';
import { HitbtcService } from './../../../services/hitbtc/hitbtc.service';
import { YobitService } from './../../../services/yobit/yobit.service';
import { Component, OnInit, ApplicationRef } from '@angular/core';

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
  _cryptopiaMarketsNames: string[] = [];
  constructor(
    private _appRef: ApplicationRef,
    private _bittrexService: BittrexService,
    private _poloniexService: PoloniexService,
    private _yobitService: YobitService,
    private _hitbtcService: HitbtcService,
    private _cryptopiaService: CryptopiaService) { }

  ngOnInit() {
    this.getYobitMarketsNames();
    this.getBittrexMarketsNames();
    this.getPoloniexMarketsNames();
    this.getHitbtcMarketsNames();
    this.getCryptopiaMarketsNames();
  }
  getCryptopiaMarketsNames() {
    this._cryptopiaService.getMarketsNames().subscribe(
      data => this._cryptopiaMarketsNames = data,
      error => this.handleError(error),
      () => this._appRef.tick()
    );
  }
  getHitbtcMarketsNames() {
    this._hitbtcService.getMarketsNames().subscribe(
      data => this._hitbtcMarketsNames = data,
      error => this.handleError(error),
      () => this._appRef.tick()
    );
  }
  getYobitMarketsNames() {
    this._yobitService.getMarketsNames().subscribe(
      data => this._yobitMarketsNames = data,
      error => console.error(error),
      () => this._appRef.tick()
    );
  }
  getPoloniexMarketsNames() {
    this._poloniexService.getMarketsNames().subscribe(
      data => this._poloniexMarketsNames = data,
      error => console.error(error),
      () => this._appRef.tick()
    );
  }
  getBittrexMarketsNames() {
    this._bittrexService.getMarketsNames().subscribe(
      data => this._bittrexMarketsNames = data,
      error => console.error(error),
      () => this._appRef.tick()
    );
  }
  handleError(error) {
    console.error(error);
  }
}
