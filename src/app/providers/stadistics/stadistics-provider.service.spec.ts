import { TestBed } from '@angular/core/testing';

import { StadisticsProviderService } from './stadistics-provider.service';

describe('StadisticsProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StadisticsProviderService = TestBed.get(StadisticsProviderService);
    expect(service).toBeTruthy();
  });
});
