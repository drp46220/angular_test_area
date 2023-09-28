import { TestBed } from '@angular/core/testing';

import { ClimbersService } from './climbers.service';

describe('ClimbersService', () => {
  let service: ClimbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
