/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CCexService } from './c-cex.service';

describe('Service: CCex', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CCexService]
    });
  });

  it('should ...', inject([CCexService], (service: CCexService) => {
    expect(service).toBeTruthy();
  }));
});