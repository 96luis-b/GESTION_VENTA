import { TestBed } from '@angular/core/testing';

import { InspectTxtService } from './inspect-txt.service';

describe('InspectTxtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InspectTxtService = TestBed.get(InspectTxtService);
    expect(service).toBeTruthy();
  });
});
