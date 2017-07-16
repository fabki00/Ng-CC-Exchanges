import { NovaExchangeService } from './../../services/nova-exchange/nova-exchange.service';
import { ExmoService } from './../../services/exmo/exmo.service';
import { CCexService } from './../../services/c-cex/c-cex.service';
import { CryptopiaService } from './../../services/cryptopia/cryptopia.service';
import { HitbtcService } from './../../services/hitbtc/hitbtc.service';
import { YobitService } from './../../services/yobit/yobit.service';
import { PoloniexService } from './../../services/poloniex/poloniex.service';
import { HttpModule } from '@angular/http';
import { BittrexService } from './../../services/bittrex/bittrex.service';
import { UnderscoreToDashPipe } from './../../pipes/underscore-to-dash.pipe';
import { SlashToDashPipe } from './../../pipes/slash-to-dash.pipe';
import { InvertPairKeyPipe } from './../../pipes/invert-pair-key.pipe';
import { TestMarketNameComponent } from './test-market-name/test-market-name.component';
import { TestMarketsNamesComponent } from './test-markets-names/test-markets-names.component';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExchangesComponent } from './exchanges.component';

describe('ExchangesComponent', () => {
  let component: ExchangesComponent;
  let fixture: ComponentFixture<ExchangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        TestMarketsNamesComponent,
        TestMarketNameComponent,
        InvertPairKeyPipe,
        SlashToDashPipe,
        UnderscoreToDashPipe
      ],
      imports: [
        HttpModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
