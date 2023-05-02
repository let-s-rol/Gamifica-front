import { TestBed } from '@angular/core/testing';

import { PentabilitiesService } from './pentabilities.service';

describe('PentabilitiesService', () => {
  let service: PentabilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PentabilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
