import { CCexService } from './../../../services/c-cex/c-cex.service';
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
  _ccexMarketsNames: string[] = [];
  constructor(
    private _appRef: ApplicationRef,
    private _bittrexService: BittrexService,
    private _poloniexService: PoloniexService,
    private _yobitService: YobitService,
    private _hitbtcService: HitbtcService,
    private _cryptopiaService: CryptopiaService,
    private _ccexService: CCexService) { }

  ngOnInit() {
    this.getAllExchangesMarketsNames();
  }
  getAllExchangesMarketsNames () {
    this.getYobitMarketsNames();
    this.getBittrexMarketsNames();
    this.getPoloniexMarketsNames();
    this.getHitbtcMarketsNames();
    this.getCryptopiaMarketsNames();
    this.getCcexMarketsNames();
  }
  getCcexMarketsNames() {
    let errorCounter = 0;
    this._ccexService.getMarketsNames().subscribe(
      data => this._ccexMarketsNames = data,
      error => {
        errorCounter++;
        errorCounter <= 5 ? this.getCcexMarketsNames() : this.handleError(error);
      },
      () => this._appRef.tick()
    );
  }
  getCryptopiaMarketsNames() {
    let errorCounter = 0;
    this._cryptopiaService.getMarketsNames().subscribe(
      data => this._cryptopiaMarketsNames = data,
      error => {
        errorCounter++;
        errorCounter <= 5 ? this.getCryptopiaMarketsNames() : this.handleError(error);
      },
      () => this._appRef.tick()
    );
  }
  getHitbtcMarketsNames() {
    let errorCounter = 0;
    this._hitbtcService.getMarketsNames().subscribe(
      data => this._hitbtcMarketsNames = data,
      error => {
        errorCounter++;
        errorCounter <= 5 ? this.getHitbtcMarketsNames() : this.handleError(error);
      },
      () => this._appRef.tick()
    );
  }
  getYobitMarketsNames() {
    let errorCounter = 0;
    this._yobitService.getMarketsNames().subscribe(
      data => this._yobitMarketsNames = data,
      error => {
        errorCounter++;
        errorCounter <= 5 ? this.getYobitMarketsNames() : this.handleError(error);
      },
      () => this._appRef.tick()
    );
  }
  getPoloniexMarketsNames() {
    let errorCounter = 0;
    this._poloniexService.getMarketsNames().subscribe(
      data => this._poloniexMarketsNames = data,
      error => {
        errorCounter++;
        errorCounter <= 5 ? this.getPoloniexMarketsNames() : this.handleError(error);
      },
      () => this._appRef.tick()
    );
  }
  getBittrexMarketsNames() {
    let errorCounter = 0;
    this._bittrexService.getMarketsNames().subscribe(
      data => this._bittrexMarketsNames = data,
      error => {
        errorCounter++;
        errorCounter <= 5 ? this.getBittrexMarketsNames() : this.handleError(error);
      },
      () => this._appRef.tick()
    );
  }
  handleError(error) {
    console.error(error);
  }
}
