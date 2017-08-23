import { SearchMarketSummariesPipe } from '../../../pipes/search-pipes/search-market.pipe';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestBittrexMarketSummariesComponent } from './test-bittrex-market-summaries.component';
import { FormsModule } from '@angular/forms';
import { BittrexService } from '../../../services/bittrex/bittrex.service';
import { HttpModule } from '@angular/http';

describe('TestBittrexMarketSummariesComponent', () => {
  let component: TestBittrexMarketSummariesComponent;
  let fixture: ComponentFixture<TestBittrexMarketSummariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBittrexMarketSummariesComponent,SearchMarketSummariesPipe ],
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
    fixture = TestBed.createComponent(TestBittrexMarketSummariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
