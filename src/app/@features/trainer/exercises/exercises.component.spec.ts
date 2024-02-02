import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerExercisesComponent } from './exercises.component';

describe('ExercisesComponent', () => {
  let component: TrainerExercisesComponent;
  let fixture: ComponentFixture<TrainerExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerExercisesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
