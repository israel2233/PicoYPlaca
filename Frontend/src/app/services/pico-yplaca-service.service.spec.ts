import { TestBed } from '@angular/core/testing';

import { PicoYPlacaServiceService } from './pico-yplaca-service.service';

describe('PicoYPlacaServiceService', () => {
  let service: PicoYPlacaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicoYPlacaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
