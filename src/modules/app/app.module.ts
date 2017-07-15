import { ExchangesComponent } from './../exchanges/exchanges.component';
import { ExchangesModule } from './../exchanges/exchanges.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ExchangesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
