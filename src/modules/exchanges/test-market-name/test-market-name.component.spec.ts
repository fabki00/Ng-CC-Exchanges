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
      declarations: [ TestMarketNameComponent ]
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
