import { TestBed } from '@angular/core/testing';

import { DatabaseCommsService } from './database-comms.service';

describe('DatabaseCommsService', () => {
  let service: DatabaseCommsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseCommsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
