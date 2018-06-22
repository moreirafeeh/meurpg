import { TestBed, inject } from '@angular/core/testing';

import { SobreService } from './sobre.service';

describe('SobreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SobreService]
    });
  });

  it('should be created', inject([SobreService], (service: SobreService) => {
    expect(service).toBeTruthy();
  }));
});
