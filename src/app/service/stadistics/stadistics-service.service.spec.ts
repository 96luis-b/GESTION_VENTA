import { TestBed } from '@angular/core/testing';

import { StadisticsServiceService } from './stadistics-service.service';

describe('StadisticsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StadisticsServiceService = TestBed.get(StadisticsServiceService);
    expect(service).toBeTruthy();
  });
});
