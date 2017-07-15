import { BittrexService } from './services/bittrex.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[BittrexService],
  exports: []
})
export class BittrexModule { }