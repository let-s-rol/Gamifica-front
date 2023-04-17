import { TestBed } from '@angular/core/testing';

import { WaitingForRankingStudentsService } from './waiting-for-ranking-students.service';

describe('WaitingForRankingStudentsService', () => {
  let service: WaitingForRankingStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaitingForRankingStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
