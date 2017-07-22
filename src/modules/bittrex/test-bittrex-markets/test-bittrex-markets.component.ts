import { BittrexMarket } from './../../../models/bittrex/bittrex-markets';
import { BittrexService } from './../../../services/bittrex/bittrex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bittrex-markets',
  templateUrl: './test-bittrex-markets.component.html',
  styleUrls: ['./test-bittrex-markets.component.css']
})
export class TestBittrexMarketsComponent implements OnInit {
_currencies: BittrexMarket[] = [];
  constructor(private _bittrexService: BittrexService) { }

  ngOnInit() {
    this.getBittrexMarkets();
  }
getBittrexMarkets() {
     this._bittrexService.getMarkets().subscribe(
      response => {
        if (response.success) {
          this._currencies = response.result;
        }else {
          this.handleError(response.message);
        }
      },
      error => this.handleError(error)
    );
  }
  handleError(error) {
    console.error(error);
  }
}
