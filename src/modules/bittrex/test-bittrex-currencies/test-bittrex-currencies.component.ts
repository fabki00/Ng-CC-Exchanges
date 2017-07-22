import { BittrexCurrencies, BittrexCurrency } from './../../../models/bittrex/bittrex-currencies';
import { BittrexService } from './../../../services/bittrex/bittrex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bittrex-currencies',
  templateUrl: './test-bittrex-currencies.component.html',
  styleUrls: ['./test-bittrex-currencies.component.css']
})
export class TestBittrexCurrenciesComponent implements OnInit {
  _currencies: BittrexCurrency[] = [];
  constructor(private _bittrexService: BittrexService) { }

  ngOnInit() {
    this.getBittrexCurrencies();
  }
  getBittrexCurrencies() {
    this._bittrexService.getCurrencies().subscribe(
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
