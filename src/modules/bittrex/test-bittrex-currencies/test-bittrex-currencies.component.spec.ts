import { SearchCurrenciesPipe } from '../../../pipes/search-pipes/search-currencies.pipe';
import { BittrexService } from './../../../services/bittrex/bittrex.service';
import { HttpModule } from '@angular/http';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestBittrexCurrenciesComponent } from './test-bittrex-currencies.component';
import { FormsModule } from '@angular/forms';

describe('TestBittrexCurrenciesComponent', () => {
  let component: TestBittrexCurrenciesComponent;
  let fixture: ComponentFixture<TestBittrexCurrenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBittrexCurrenciesComponent, SearchCurrenciesPipe ],
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
    fixture = TestBed.createComponent(TestBittrexCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
