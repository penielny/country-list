import { TestBed } from '@angular/core/testing';

import { CountryHttpService } from './country-http.service';

describe('HttpServiceService', () => {
  let service: CountryHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
