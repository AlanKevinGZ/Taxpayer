import { TestBed } from '@angular/core/testing';

import { TaxpayService } from './taxpay.service';

describe('TaxpayService', () => {
  let service: TaxpayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxpayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
