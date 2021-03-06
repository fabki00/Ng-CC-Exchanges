import { SearchMarketSummariesPipe } from './../../pipes/search-pipes/search-market.pipe';
import { SearchMarketNamePipe } from './../../pipes/search-pipes/search-market-name.pipe';
import { SearchCurrenciesPipe } from './../../pipes/search-pipes/search-currencies.pipe';
import { FormsModule } from '@angular/forms';
import { TestMarketNameComponent } from './../test-shared/test-market-name/test-market-name.component';
import { TestSharedModule } from './../test-shared/test-shared.module';
import { TestBittrexCurrenciesComponent } from './test-bittrex-currencies/test-bittrex-currencies.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BittrexComponent } from './bittrex.component';
import { TestBittrexMarketSummariesComponent } from './test-bittrex-market-summaries/test-bittrex-market-summaries.component';
import { TestBittrexMarketsComponent } from './test-bittrex-markets/test-bittrex-markets.component';
import { TestBittrexOrderBookComponent } from './test-bittrex-order-book/test-bittrex-order-book.component';
import { TestBittrexTickerComponent } from './test-bittrex-ticker/test-bittrex-ticker.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TestSharedModule
  ],
  declarations: [
    BittrexComponent,
    TestBittrexCurrenciesComponent,
    TestBittrexMarketSummariesComponent,
    TestBittrexMarketsComponent,
    SearchCurrenciesPipe,
    SearchMarketSummariesPipe,
    TestBittrexOrderBookComponent,
    TestBittrexTickerComponent
]
})
export class BittrexModule { }
