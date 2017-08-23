/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestBittrexOrderBookComponent } from './test-bittrex-order-book.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BittrexService } from '../../../services/bittrex/bittrex.service';

describe('TestBittrexOrderBookComponent', () => {
  let component: TestBittrexOrderBookComponent;
  let fixture: ComponentFixture<TestBittrexOrderBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBittrexOrderBookComponent ],
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
    fixture = TestBed.createComponent(TestBittrexOrderBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
