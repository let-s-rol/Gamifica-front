import { TestBed } from '@angular/core/testing';

import { SolicitudeManagementService } from './solicitude-management.service';

describe('SolicitudeManagementService', () => {
  let service: SolicitudeManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudeManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
