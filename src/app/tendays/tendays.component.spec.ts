import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendaysComponent } from './tendays.component';

describe('TendaysComponent', () => {
  let component: TendaysComponent;
  let fixture: ComponentFixture<TendaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TendaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TendaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
