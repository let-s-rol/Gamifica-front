import { TestBed } from '@angular/core/testing';

import { SelectRankingInfoService } from './select-ranking-info.service';

describe('SelectRankingInfoService', () => {
  let service: SelectRankingInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectRankingInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
