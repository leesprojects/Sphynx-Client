import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerDynamicWorkoutComponent } from './trainer-dynamic-workout.component';

describe('TrainerDynamicWorkoutComponent', () => {
  let component: TrainerDynamicWorkoutComponent;
  let fixture: ComponentFixture<TrainerDynamicWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerDynamicWorkoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainerDynamicWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
