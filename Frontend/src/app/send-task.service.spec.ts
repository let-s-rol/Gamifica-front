import { TestBed } from '@angular/core/testing';

import { SendTaskService } from './send-task.service';

describe('SendTaskService', () => {
  let service: SendTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
