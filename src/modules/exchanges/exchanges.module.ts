import { InvertPairKeyPipe } from './../../pipes/invert-pair-key.pipe';
import { UnderscoreToDashPipe } from './../../pipes/underscore-to-dash.pipe';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { YobitService } from './../../services/yobit/yobit.service';
import { PoloniexService } from './../../services/poloniex/poloniex.service';
import { BittrexService } from './../../services/bittrex/bittrex.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangesComponent } from './exchanges.component';
import { TestMarketsNamesComponent } from './test-markets-names/test-markets-names.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [BittrexService, PoloniexService, YobitService],
  declarations: [
    ExchangesComponent,
    TestMarketsNamesComponent,
    UnderscoreToDashPipe,
    InvertPairKeyPipe
],
  exports: [ExchangesComponent],
  bootstrap: [ExchangesComponent]
})
export class ExchangesModule { }