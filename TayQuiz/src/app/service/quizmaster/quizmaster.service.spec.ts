import { TestBed } from '@angular/core/testing';

import { QuizmasterService } from './quizmaster.service';

describe('QuizmasterService', () => {
  let service: QuizmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
