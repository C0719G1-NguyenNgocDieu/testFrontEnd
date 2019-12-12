import { TestBed } from '@angular/core/testing';

import { RichtextService } from './richtext.service';

describe('RichtextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RichtextService = TestBed.get(RichtextService);
    expect(service).toBeTruthy();
  });
});
