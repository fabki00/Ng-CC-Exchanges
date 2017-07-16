/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HitbtcService } from './hitbtc.service';

describe('Service: Hitbtc', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HitbtcService]
    });
  });

  it('should ...', inject([HitbtcService], (service: HitbtcService) => {
    expect(service).toBeTruthy();
  }));
});