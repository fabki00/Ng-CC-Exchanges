import { BittrexService } from './../../services/bittrex/bittrex.service';
import { Component, OnInit, ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-bittrex',
  templateUrl: './bittrex.component.html',
  styleUrls: ['./bittrex.component.css']
})
export class BittrexComponent implements OnInit {
  _errorMsg = 'technical error occured';
  _loadingMsg = 'Loading ...';
  _bittrexMarketsNames: string[] = [];
  _bittrexMsg =  this._loadingMsg;
  constructor( private _appRef: ApplicationRef,
    private _bittrexService: BittrexService) { }

  ngOnInit() {
     this.getBittrexMarketsNames();
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
