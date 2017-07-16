import { HttpModule } from '@angular/http';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PoloniexService } from './poloniex.service';

describe('Service: Poloniex', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoloniexService],
      imports: [
        HttpModule
      ]
    });
  });

  it('should ...', inject([PoloniexService], (service: PoloniexService) => {
    expect(service).toBeTruthy();
  }));
});
