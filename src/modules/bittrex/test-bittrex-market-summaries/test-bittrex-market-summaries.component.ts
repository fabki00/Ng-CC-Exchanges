import { BittrexMarketSummary } from './../../../models/bittrex/bittrex-market-summaries';
import { BittrexService } from './../../../services/bittrex/bittrex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bittrex-market-summaries',
  templateUrl: './test-bittrex-market-summaries.component.html',
  styleUrls: ['./test-bittrex-market-summaries.component.css']
})
export class TestBittrexMarketSummariesComponent implements OnInit {
  _currencies: BittrexMarketSummary[] = [];
  constructor(private _bittrexService: BittrexService) { }

  ngOnInit() {
    this.getBittrexMarketCurrencies();
  }
  getBittrexMarketCurrencies() {
     this._bittrexService.getMarketSummaries().subscribe(
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
