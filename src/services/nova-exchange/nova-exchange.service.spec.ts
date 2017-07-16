/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NovaExchangeService } from './nova-exchange.service';

describe('Service: NovaExchange', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NovaExchangeService]
    });
  });

  it('should ...', inject([NovaExchangeService], (service: NovaExchangeService) => {
    expect(service).toBeTruthy();
  }));
});