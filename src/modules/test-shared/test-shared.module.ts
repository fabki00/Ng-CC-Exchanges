import { SearchMarketNamePipe } from './../../pipes/search-market-name.pipe';
import { FormsModule } from '@angular/forms';
import { SearchMarketPipe } from './../../pipes/search-market.pipe';
import { TestMarketNameComponent } from './test-market-name/test-market-name.component';
import { TestMarketsNamesComponent } from './test-markets-names/test-markets-names.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestSharedComponent } from './test-shared.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TestSharedComponent,
    TestMarketsNamesComponent,
    TestMarketNameComponent,
    SearchMarketNamePipe
  ],
  exports: [
    TestMarketNameComponent
  ]
})
export class TestSharedModule { }
