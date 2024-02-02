import { CardComponent } from '@Components/card/card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { HARDCODED_WORKOUTS } from '../dashboard/trainer-dashboard-hardcoded-data';
import { CommonModule } from '@angular/common';
import { IExercise } from '../../../@models/trainer';

@Component({
  selector: 'app-trainer-workouts',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatDividerModule,
    DragDropModule,
    CardComponent
  ],
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
