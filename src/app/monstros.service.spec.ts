import { TestBed, inject } from '@angular/core/testing';

import { MonstrosService } from './rpg/monstros/monstros.service';

describe('MonstrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonstrosService]
    });
  });

  it('should be created', inject([MonstrosService], (service: MonstrosService) => {
    expect(service).toBeTruthy();
  }));
});
