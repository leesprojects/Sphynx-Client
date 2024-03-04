import { Component } from '@angular/core';
import { HARDCODED_WORKOUTS } from '../trainer-dashboard-hardcoded-data';
import { IExercise } from '../../../@models/trainer';

@Component({
  selector: 'app-trainer-workouts',
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.scss'
})
export class TrainerWorkoutsComponent {
  workouts = HARDCODED_WORKOUTS;
  columnsToRender: string[] = ['id', 'name', 'description', 'category', 'exercises'];

  generateRenderableExercises(exercises: IExercise[]): string {
    return exercises.map(exercise => exercise.name).join(', ');
  }
}
