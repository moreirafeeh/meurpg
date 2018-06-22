import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaPersonagemComponent } from './ficha-personagem.component';

describe('FichaPersonagemComponent', () => {
  let component: FichaPersonagemComponent;
  let fixture: ComponentFixture<FichaPersonagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaPersonagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaPersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
