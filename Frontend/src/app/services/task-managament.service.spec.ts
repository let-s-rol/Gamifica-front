import { TestBed } from '@angular/core/testing';

import { TaskManagamentService } from './task-managament.service';

describe('TaskManagamentService', () => {
  let service: TaskManagamentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskManagamentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
