import { TestBed } from '@angular/core/testing';

import { DashboardProviderService } from './dashboard-provider.service';

describe('DashboardProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardProviderService = TestBed.get(DashboardProviderService);
    expect(service).toBeTruthy();
  });
});
