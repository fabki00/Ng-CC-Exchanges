/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { YobitService } from './yobit.service';

describe('Service: Yobit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YobitService]
    });
  });

  it('should ...', inject([YobitService], (service: YobitService) => {
    expect(service).toBeTruthy();
  }));
});