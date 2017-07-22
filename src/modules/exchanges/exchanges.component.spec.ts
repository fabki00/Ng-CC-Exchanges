import { BittrexModule } from '../bittrex/bittrex.module';
import { TestSharedModule } from './../test-shared/test-shared.module';
import { FormsModule } from '@angular/forms';
import { BittrexComponent } from './../bittrex/bittrex.component';
import { HomeComponent } from './home/home.component';
import { routes } from './exchanges.router';
import { RouterModule } from '@angular/router';
import { NovaExchangeService } from './../../services/nova-exchange/nova-exchange.service';
import { ExmoService } from './../../services/exmo/exmo.service';
import { CCexService } from './../../services/c-cex/c-cex.service';
import { CryptopiaService } from './../../services/cryptopia/cryptopia.service';
import { HitbtcService } from './../../services/hitbtc/hitbtc.service';
import { YobitService } from './../../services/yobit/yobit.service';
import { PoloniexService } from './../../services/poloniex/poloniex.service';
import { HttpModule } from '@angular/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { ExchangesComponent } from './exchanges.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('ExchangesComponent', () => {
  let component: ExchangesComponent;
  let fixture: ComponentFixture<ExchangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [],
      declarations: [
        ExchangesComponent,
        HomeComponent
      ],
      imports: [
        HttpModule,
        FormsModule,
        TestSharedModule,
        BittrexModule,
        RouterTestingModule.withRoutes(routes)
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
