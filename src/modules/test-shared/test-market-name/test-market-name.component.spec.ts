import { UnderscoreToDashPipe } from './../../../pipes/underscore-to-dash.pipe';
import { SlashToDashPipe } from './../../../pipes/slash-to-dash.pipe';
import { InvertPairKeyPipe } from './../../../pipes/invert-pair-key.pipe';
import { TestMarketsNamesComponent } from './../test-markets-names/test-markets-names.component';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestMarketNameComponent } from './test-market-name.component';

describe('TestMarketNameComponent', () => {
  let component: TestMarketNameComponent;
  let fixture: ComponentFixture<TestMarketNameComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMarketNameComponent,
        TestMarketsNamesComponent,
        InvertPairKeyPipe,
        SlashToDashPipe,
        UnderscoreToDashPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMarketNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
