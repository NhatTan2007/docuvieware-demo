import { TestBed } from '@angular/core/testing';

import { DocuviewareClientApiService } from './docuvieware-client-api.service';

describe('DocuviewareClientApiService', () => {
  let service: DocuviewareClientApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocuviewareClientApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
