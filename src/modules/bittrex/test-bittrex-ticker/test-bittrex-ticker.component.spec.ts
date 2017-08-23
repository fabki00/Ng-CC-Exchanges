import { BittrexService } from '../../../services/bittrex/bittrex.service';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestBittrexTickerComponent } from './test-bittrex-ticker.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

describe('TestBittrexTickerComponent', () => {
  let component: TestBittrexTickerComponent;
  let fixture: ComponentFixture<TestBittrexTickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBittrexTickerComponent ],
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
    fixture = TestBed.createComponent(TestBittrexTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
