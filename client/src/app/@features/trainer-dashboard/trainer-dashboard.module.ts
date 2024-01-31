import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureFrameComponent } from '@Components/feature-frame/feature-frame.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { TrainerExercisesComponent } from './exercises/exercises.component';
import { TrainerDashboardComponent } from './trainer-dashboard.component';
import { TrainerWorkoutsComponent } from './workouts/workouts.component';
import { TrainerRoutinesComponent } from './routines/routines.component';
import { MatTabsModule } from '@angular/material/tabs';

const trainerDashboardComponents = [
  TrainerExercisesComponent,
  TrainerWorkoutsComponent,
  TrainerRoutinesComponent
]

@NgModule({
  declarations: [TrainerDashboardComponent],
  exports: [TrainerDashboardComponent],
  imports: [
    CommonModule,
    FeatureFrameComponent,
    MatTableModule,
    MatDividerModule,
    MatTabsModule,
    ...trainerDashboardComponents,
  ]
})
export class TrainerDashboardModule { }
