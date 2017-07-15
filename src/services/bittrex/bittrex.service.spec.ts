/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BittrexService } from './bittrex.service';

describe('Service: Bittrex', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BittrexService]
    });
  });

  it('should ...', inject([BittrexService], (service: BittrexService) => {
    expect(service).toBeTruthy();
  }));
});