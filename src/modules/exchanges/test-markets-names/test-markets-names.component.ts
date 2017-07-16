import { NovaExchangeService } from './../../../services/nova-exchange/nova-exchange.service';
import { ExmoService } from './../../../services/exmo/exmo.service';
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
   _errorMsg = 'technical error occured';
   _loadingMsg = 'Loading ...';

  _poloniexMarketsNames: string[] = [];
  _bittrexMarketsNames: string[] = [];
  _yobitMarketsNames: string[] = [];
  _hitbtcMarketsNames: string[] = [];
  _cryptopiaMarketsNames: string[] = [];
  _ccexMarketsNames: string[] = [];
  _exmoMarketsNames: string[] = [];
  _novaExchangeMarketsNames: string[] = [];

  _poloniexMsg =  this._loadingMsg;
  _bittrexMsg =  this._loadingMsg;
  _yobitMsg =  this._loadingMsg;
  _hitbtcMsg =  this._loadingMsg;
  _cryptopiaMsg = this._loadingMsg;
  _exmoMsg = this._loadingMsg;
  _ccexMsg = this._loadingMsg;
  _novaExchangeMsg = this._loadingMsg;

  constructor(
    private _appRef: ApplicationRef,
    private _bittrexService: BittrexService,
    private _poloniexService: PoloniexService,
    private _yobitService: YobitService,
    private _hitbtcService: HitbtcService,
    private _cryptopiaService: CryptopiaService,
    private _ccexService: CCexService,
    private _exmoService: ExmoService,
    private _novaExchangeService: NovaExchangeService) { }

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
    this.getExmoMarketsNames();
    this.getNovaExchangeMarketsNames();
  }
  getNovaExchangeMarketsNames() {
    this._novaExchangeService.getMarketsNames()
    .subscribe(
      data => this._novaExchangeMarketsNames = data,
      error => {
         this.handleError(error);
         this._novaExchangeMsg = this._errorMsg;
      },
      () => {
        this._novaExchangeMsg =  this._loadingMsg;
        this._appRef.tick();
      }
    );
  }
  getExmoMarketsNames() {
    this._exmoService.getMarketsNames().subscribe(
      data => this._exmoMarketsNames = data,
      error => {
         this.handleError(error);
         this._exmoMsg = this._errorMsg;
      },
      () => {
        this._exmoMsg =  this._loadingMsg;
        this._appRef.tick();
      }
    );
  }
  getCcexMarketsNames() {
    this._ccexService.getMarketsNames().subscribe(
      data => this._ccexMarketsNames = data,
      error => {
         this.handleError(error);
         this._ccexMsg = this._errorMsg;
      },
      () => {
        this._ccexMsg =  this._loadingMsg;
        this._appRef.tick();
      }
    );
  }
getCryptopiaMarketsNames() {
    this._cryptopiaService.getMarketsNames().subscribe(
      data => this._cryptopiaMarketsNames = data,
      error => {
         this.handleError(error);
         this._cryptopiaMsg = this._errorMsg;
      },
      () => {
        this._cryptopiaMsg =  this._loadingMsg;
        this._appRef.tick();
      }
    );
  }
  getHitbtcMarketsNames() {
    this._hitbtcService.getMarketsNames().subscribe(
      data => this._hitbtcMarketsNames = data,
     error => {
         this.handleError(error);
         this._hitbtcMsg = this._errorMsg;
      },
      () => {
        this._hitbtcMsg =  this._loadingMsg;
        this._appRef.tick();
      }
    );
  }
  getYobitMarketsNames() {
    this._yobitService.getMarketsNames().subscribe(
      data => this._yobitMarketsNames = data,
      error => {
         this.handleError(error);
         this._yobitMsg = this._errorMsg;
      },
      () => {
        this._yobitMsg =  this._loadingMsg;
        this._appRef.tick();
      }
    );
  }
  getPoloniexMarketsNames() {
    this._poloniexService.getMarketsNames().subscribe(
      data => this._poloniexMarketsNames = data,
      error => {
         this.handleError(error);
         this._poloniexMsg = this._errorMsg;
      },
      () => {
        this._poloniexMsg =  this._loadingMsg;
        this._appRef.tick();
      }
    );
  }
  getBittrexMarketsNames() {
    this._bittrexService.getMarketsNames().subscribe(
      data => this._bittrexMarketsNames = data,
      error => {
         this.handleError(error);
         this._bittrexMsg = this._errorMsg;
      },
      () => {
        this._bittrexMsg =  this._loadingMsg;
        this._appRef.tick();
      }
    );
  }
  handleError(error) {
    console.error(error);
  }
}
