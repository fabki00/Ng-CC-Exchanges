/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestBittrexMarketsComponent } from './test-bittrex-markets.component';
import { BittrexService } from '../../../services/bittrex/bittrex.service';
import { FormsModule } from '@angular/forms';
import { SearchMarketSummariesPipe } from '../../../pipes/search-pipes/search-market.pipe';
import { HttpModule } from '@angular/http';

describe('TestBittrexMarketsComponent', () => {
  let component: TestBittrexMarketsComponent;
  let fixture: ComponentFixture<TestBittrexMarketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestBittrexMarketsComponent,
        SearchMarketSummariesPipe
     ],
      imports: [
        HttpModule,
        FormsModule
      ],
      providers: [
        BittrexService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBittrexMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
