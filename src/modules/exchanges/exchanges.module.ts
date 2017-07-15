import { PoloniexService } from './../../services/poloniex/poloniex.service';
import { BittrexService } from './../../services/bittrex/bittrex.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangesComponent } from './exchanges.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [BittrexService, PoloniexService],
  declarations: [ExchangesComponent],
  exports: [ExchangesComponent]
})
export class ExchangesModule { }