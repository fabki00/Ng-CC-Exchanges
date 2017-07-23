import { BittrexTicker } from './../../../models/bittrex/bittrex-ticker';
import { BittrexService } from './../../../services/bittrex/bittrex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bittrex-ticker',
  templateUrl: './test-bittrex-ticker.component.html',
  styleUrls: ['./test-bittrex-ticker.component.css']
})
export class TestBittrexTickerComponent implements OnInit {
  _tempTicker: BittrexTicker;
  _marketNames: string[] = [];
   filter = '';
  constructor(private _bittrexService: BittrexService) { }

  ngOnInit() {
     this.getBittrexMarketNames();
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
  getBittrexTicker(market) {
    this._bittrexService.getTicker(market).subscribe(
      response => {
        if (response.success && response.result ) {
          this._tempTicker = {
           marketName: market,
           ticker: response.result
          };
        }else {
          this.handleError(response.message);
        }
      }
    );
  }
  submit() {
  if (this._marketNames.length > 0 && this.filter !== '') {
  const currencies: BittrexTicker[] = [];
  let counter = -1;
    do {
      counter++;
      if (this._marketNames[counter].indexOf(this.filter.toUpperCase()) > -1) {
        this.getBittrexTicker(this._marketNames[counter]);
        counter = -1;
      }
    }while (counter !== -1 || counter === this._marketNames.length);
  }
}
  handleError(error) {
    console.error(error);
  }
}
