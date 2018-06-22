import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgComponent } from './rpg.component';

describe('RpgComponent', () => {
  let component: RpgComponent;
  let fixture: ComponentFixture<RpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
