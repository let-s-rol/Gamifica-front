import { TestBed } from '@angular/core/testing';

import { TeacherRankingsService } from './teacher-rankings.service';

describe('TeacherRankingsService', () => {
  let service: TeacherRankingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherRankingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
