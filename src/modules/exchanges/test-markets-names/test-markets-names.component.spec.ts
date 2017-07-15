/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestMarketsNamesComponent } from './test-markets-names.component';

describe('TestMarketsNamesComponent', () => {
  let component: TestMarketsNamesComponent;
  let fixture: ComponentFixture<TestMarketsNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMarketsNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMarketsNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
