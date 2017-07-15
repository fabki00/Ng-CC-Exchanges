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
  constructor(private _bittrexService: BittrexService, private _poloniexService: PoloniexService) { }

  ngOnInit() {
    this.getBittrexMarketsNames();
    this.getPoloniexMarketsNames();
  }
  getPoloniexMarketsNames() {
    this._poloniexService.getMarketsNames().subscribe(
      data => this._poloniexMarketsNames = data,
      error => console.error(error)
    )
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
