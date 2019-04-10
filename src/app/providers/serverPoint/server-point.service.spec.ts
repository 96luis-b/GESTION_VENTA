import { TestBed } from '@angular/core/testing';

import { ServerPointService } from './server-point.service';

describe('ServerPointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerPointService = TestBed.get(ServerPointService);
    expect(service).toBeTruthy();
  });
});
