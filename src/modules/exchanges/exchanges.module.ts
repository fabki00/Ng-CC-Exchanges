import { BittrexModule } from './../bittrex/bittrex.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangesComponent } from './exchanges.component';

@NgModule({
  imports: [
    CommonModule,
    BittrexModule
  ],
  providers: [],
  declarations: [ExchangesComponent],
  exports: [ExchangesComponent]
})
export class ExchangesModule { }