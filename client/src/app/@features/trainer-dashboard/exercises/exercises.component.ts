import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CardComponent } from '@Components/card/card.component';
import { HARDCODED_EXERCISES } from '../trainer-dashboard-hardcoded-data';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

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
  exercises = HARDCODED_EXERCISES;
  columnsToRender: string[] = ['id', 'name', 'description', 'category', 'weighted'];
}
