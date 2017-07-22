import { TestMarketNameComponent } from './../test-shared/test-market-name/test-market-name.component';
import { TestSharedModule } from './../test-shared/test-shared.module';
import { SearchMarketPipe } from './../../../pipes/search-market.pipe';
import { TestBittrexCurrenciesComponent } from './test-bittrex-currencies/test-bittrex-currencies.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BittrexComponent } from './bittrex.component';

@NgModule({
  imports: [
    CommonModule,
    TestSharedModule
  ],
  declarations: [BittrexComponent, TestBittrexCurrenciesComponent]
})
export class BittrexModule { }
