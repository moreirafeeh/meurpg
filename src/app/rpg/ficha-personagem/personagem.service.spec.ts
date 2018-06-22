import { TestBed, inject } from '@angular/core/testing';

import { PersonagemService } from './personagem.service';

describe('PersonagemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonagemService]
    });
  });

  it('should be created', inject([PersonagemService], (service: PersonagemService) => {
    expect(service).toBeTruthy();
  }));
});
