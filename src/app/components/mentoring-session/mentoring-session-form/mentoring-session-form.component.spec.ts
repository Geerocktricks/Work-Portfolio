import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoringSessionFormComponent } from './mentoring-session-form.component';

describe('MentoringSessionFormComponent', () => {
  let component: MentoringSessionFormComponent;
  let fixture: ComponentFixture<MentoringSessionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentoringSessionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentoringSessionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
