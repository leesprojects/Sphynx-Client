import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CardComponent } from '@Components/card/card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { ExerciseDataService } from '@App/@data/exercises.data.service';
import { IExercise } from '@App/@models/trainer';

@Component({
  selector: 'app-trainer-exercises',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatDividerModule,
    DragDropModule,
    CardComponent,
    MatTabsModule
  ],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.scss'
})
export class TrainerExercisesComponent {
  exercises: IExercise[];
  columnsToRender: string[] = ['id', 'name', 'description', 'category', 'weighted'];

  constructor(
    private _exercisesDataService: ExerciseDataService
  ) {
    this._exercisesDataService.getAllExercises().then(exercises => {
      this.exercises = exercises;
    });
  }

}
