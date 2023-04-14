import { TestBed } from '@angular/core/testing';

import { NewRankingServiceService } from './new-ranking-service.service';

describe('NewRankingServiceService', () => {
  let service: NewRankingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewRankingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
