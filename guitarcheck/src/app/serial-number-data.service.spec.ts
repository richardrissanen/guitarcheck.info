import { TestBed, inject } from '@angular/core/testing';

import { SerialNumberDataService } from './serial-number-data.service';

describe('SerialNumberDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerialNumberDataService]
    });
  });

  it('should be created', inject([SerialNumberDataService], (service: SerialNumberDataService) => {
    expect(service).toBeTruthy();
  }));
});
