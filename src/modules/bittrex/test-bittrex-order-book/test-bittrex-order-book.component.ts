import { BittrexOrder } from './../../../models/bittrex/bittrex-order-book';
import { BittrexService } from './../../../services/bittrex/bittrex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bittrex-order-book',
  templateUrl: './test-bittrex-order-book.component.html',
  styleUrls: ['./test-bittrex-order-book.component.css']
})
export class TestBittrexOrderBookComponent implements OnInit {
  _currencies: BittrexOrder[] = [];
  _tempCurrencyBuy: BittrexOrder[] = [];
   _tempCurrencySell: BittrexOrder[] = [];
  _marketNames: string[] = [];
  filter = '';
  constructor(private _bittrexService: BittrexService) { }
  ngOnInit() {
    this.getBittrexMarketNames();
  }

inputkeyChange() {
   this.getBittrexOrderBook(this.filter);
}
xx() {
  const currencies: BittrexOrder[] = [];
  let counter = -1;
    do {
      counter++;
      if (this._marketNames[counter].indexOf(this.filter) > -1) {
        this.getBittrexBuyOrderBook(this._marketNames[counter]);
        this.getBittrexSellOrderBook(this._marketNames[counter]);
        counter = -1;
      }
    }while (counter !== -1);
}
getBittrexMarketNames() {
    this._bittrexService.getMarketsNames().subscribe(
      response => {
        if (response) {
          this._marketNames = response;
        }else {
          this.handleError(response);
        }
      },
      error => this.handleError(error)
    );
  }
getBittrexOrderBook(market) {
  if (market !== '') {
    this._bittrexService.getOrderBook(market).subscribe(
      response => {
        if (response.success && response.result ) {
          this._tempCurrencyBuy = response.result;
        }else {
          this.handleError(response.message);
        }
      },
      error => this.handleError(error)
    );
  }
  }
getBittrexBuyOrderBook(market) {
  if (market !== '') {
    this._bittrexService.getOrderBook(market, 'buy').subscribe(
      response => {
        if (response.success && response.result ) {
          this._tempCurrencyBuy = response.result;
        }else {
          this.handleError(response.message);
        }
      },
      error => this.handleError(error)
    );
  }
  }
getBittrexSellOrderBook(market) {
  if (market !== '') {
    this._bittrexService.getOrderBook(market, 'sell').subscribe(
      response => {
        if (response.success && response.result ) {
          this._tempCurrencySell = response.result;
        }else {
          this.handleError(response.message);
        }
      },
      error => this.handleError(error)
    );
  }
  }
  handleError(error) {
    console.error(error);
  }
}
