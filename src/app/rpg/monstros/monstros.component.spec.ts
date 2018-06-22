import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstrosComponent } from './monstros.component';

describe('MonstrosComponent', () => {
  let component: MonstrosComponent;
  let fixture: ComponentFixture<MonstrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonstrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
