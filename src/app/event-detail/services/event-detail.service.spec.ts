import { TestBed } from '@angular/core/testing';

import { EventDetailService } from './event-detail.service';

describe('EventDetailService', () => {
  let service: EventDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
