import { Component } from '@angular/core';
import { ExerciseDataService } from '@App/@data/exercises.data.service';
import { IExercise } from '@App/@models/trainer';

@Component({
  selector: 'app-trainer-exercises',
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.scss'
})
export class TrainerExercisesComponent {
  exercises: IExercise[];
  columnsToRender: string[] = ['id', 'name', 'description', 'category', 'weighted'];

  constructor(
    private _exercisesDataService: ExerciseDataService
  ) {
    this._exercisesDataService.getAllExercises().then(exercises => this.exercises = exercises);
  }

}
