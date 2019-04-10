import { TestBed } from '@angular/core/testing';

import { BillProviderService } from './bill-provider.service';

describe('BillProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillProviderService = TestBed.get(BillProviderService);
    expect(service).toBeTruthy();
  });
});
