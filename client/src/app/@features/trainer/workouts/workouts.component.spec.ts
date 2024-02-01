import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerWorkoutsComponent } from './workouts.component';

describe('WorkoutsComponent', () => {
  let component: TrainerWorkoutsComponent;
  let fixture: ComponentFixture<TrainerWorkoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerWorkoutsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerWorkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
