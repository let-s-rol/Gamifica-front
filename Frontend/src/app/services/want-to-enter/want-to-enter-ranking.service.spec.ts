import { TestBed } from '@angular/core/testing';

import { WantToEnterRankingService } from './want-to-enter-ranking.service';

describe('WantToEnterRankingService', () => {
  let service: WantToEnterRankingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WantToEnterRankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
