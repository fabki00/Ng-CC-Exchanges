import { FormsModule } from '@angular/forms';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BittrexService } from './bittrex.service';

import { HttpModule } from '@angular/http';

describe('Service: Bittrex', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BittrexService],
      imports: [
        HttpModule
      ]

    });
  });

  it('should ...', inject([BittrexService], (service: BittrexService) => {
    expect(service).toBeTruthy();
  }));
});
