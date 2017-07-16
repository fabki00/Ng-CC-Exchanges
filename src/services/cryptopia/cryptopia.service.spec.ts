import { HttpModule } from '@angular/http';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CryptopiaService } from './cryptopia.service';

describe('Service: Cryptopia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptopiaService],
      imports: [
        HttpModule
      ]
    });
  });

  it('should ...', inject([CryptopiaService], (service: CryptopiaService) => {
    expect(service).toBeTruthy();
  }));
});
