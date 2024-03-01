import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '@Components/card/card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { TrainerExercisesComponent } from './exercises.component';
import { ExercisesTableComponent } from './exercises-table/exercises-table.component';
import { ExerciseViewComponent } from './exercise-view/exercise-view.component';

const components = [
  TrainerExercisesComponent,
  ExercisesTableComponent,
  ExerciseViewComponent
]

@NgModule({
  declarations: components,
  exports: [
    TrainerExercisesComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatDividerModule,
    DragDropModule,
    CardComponent,
    MatTabsModule,
    MatTableModule
  ]
})
export class ExercisesModule { }
