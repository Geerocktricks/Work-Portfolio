import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoringSessionComponent } from './mentoring-session.component';

describe('MentoringSessionComponent', () => {
  let component: MentoringSessionComponent;
  let fixture: ComponentFixture<MentoringSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentoringSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentoringSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
