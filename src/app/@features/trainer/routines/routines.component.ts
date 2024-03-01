import { CardComponent } from '@Components/card/card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { HARDCODED_ROUTINES } from '../trainer-dashboard-hardcoded-data';
import { CommonModule } from '@angular/common';
import { IWorkout } from '../../../@models/trainer';

@Component({
  selector: 'app-trainer-routines',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatDividerModule,
    DragDropModule,
    CardComponent
  ],
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
