import { TestBed } from '@angular/core/testing';

import { CopiaService } from './copia.service';

describe('CopiaService', () => {
  let service: CopiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
