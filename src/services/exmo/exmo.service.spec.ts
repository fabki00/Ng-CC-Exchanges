import { HttpModule } from '@angular/http';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExmoService } from './exmo.service';

describe('Service: Exmo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExmoService],
      imports: [
        HttpModule
      ]
    });
  });

  it('should ...', inject([ExmoService], (service: ExmoService) => {
    expect(service).toBeTruthy();
  }));
});
