import { BittrexService } from './../../../services/bittrex/bittrex.service';
import { HttpModule } from '@angular/http';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestBittrexCurrenciesComponent } from './test-bittrex-currencies.component';

describe('TestBittrexCurrenciesComponent', () => {
  let component: TestBittrexCurrenciesComponent;
  let fixture: ComponentFixture<TestBittrexCurrenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ TestBittrexCurrenciesComponent ],
      providers: [BittrexService]
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
