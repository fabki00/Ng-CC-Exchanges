import { BittrexModule } from './bittrex/bittrex.module';
import { routes } from './exchanges.router';
import { SearchMarketPipe } from './../../pipes/search-market.pipe';
import { NovaExchangeService } from './../../services/nova-exchange/nova-exchange.service';
import { ExmoService } from './../../services/exmo/exmo.service';
import { CCexService } from './../../services/c-cex/c-cex.service';
import { SlashToDashPipe } from './../../pipes/slash-to-dash.pipe';
import { CryptopiaService } from './../../services/cryptopia/cryptopia.service';
import { HitbtcService } from './../../services/hitbtc/hitbtc.service';
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
import { TestMarketNameComponent } from './test-market-name/test-market-name.component';
import { HomeComponent } from './home/home.component';
import { BittrexComponent } from './bittrex/bittrex.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BittrexModule
  ],
  providers: [
    BittrexService,
    PoloniexService,
    YobitService,
    HitbtcService,
    CryptopiaService,
    CCexService,
    ExmoService,
    NovaExchangeService
  ],
  declarations: [
    ExchangesComponent,
    UnderscoreToDashPipe,
    InvertPairKeyPipe,
    SlashToDashPipe,
    HomeComponent
],
  exports: [
    ExchangesComponent
],
  bootstrap: [ExchangesComponent]
})
export class ExchangesModule { }
