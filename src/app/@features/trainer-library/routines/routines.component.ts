import { Component } from '@angular/core';
import { HARDCODED_ROUTINES } from '../trainer-dashboard-hardcoded-data';
import { IWorkout } from '../../../@models/trainer';

@Component({
  selector: 'app-trainer-library-routines',
  templateUrl: './routines.component.html',
  styleUrl: './routines.component.scss'
})
export class TrainerRoutinesComponent {
  columnsToRender: string[] = ['id', 'name', 'description', 'category', 'workouts'];
  routines = HARDCODED_ROUTINES;

  generateRenderableWorkouts(workouts: IWorkout[]): string {
    return workouts.map(workout => workout.name).join(', ');
  }
}
