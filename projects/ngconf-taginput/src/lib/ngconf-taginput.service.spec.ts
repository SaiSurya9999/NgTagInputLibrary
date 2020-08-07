import { TestBed } from '@angular/core/testing';

import { NgconfTaginputService } from './ngconf-taginput.service';

describe('NgconfTaginputService', () => {
  let service: NgconfTaginputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgconfTaginputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
