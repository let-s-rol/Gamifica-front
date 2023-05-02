import { TestBed } from '@angular/core/testing';

import { StudentRankingManagamentService } from './student-ranking-managament.service';

describe('StudentRankingManagamentService', () => {
  let service: StudentRankingManagamentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentRankingManagamentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
