import { TestBed } from '@angular/core/testing';

import { NgxImageConvertorService } from './ngx-image-convertor.service';

describe('NgxImageConvertorService', () => {
  let service: NgxImageConvertorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxImageConvertorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
