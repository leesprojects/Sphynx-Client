import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerComponent } from './trainer.component';
import { ExercisesModule } from './exercises/exercises.module';
import { FeatureFrameComponent } from '@Components/feature-frame/feature-frame.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { TrainerRoutinesComponent } from './routines/routines.component';
import { TrainerWorkoutsComponent } from './workouts/workouts.component';

@NgModule({
  declarations: [
    TrainerComponent,
  ],
  imports: [
    CommonModule,
    FeatureFrameComponent,
    MatTableModule,
    MatDividerModule,
    MatTabsModule,
    ExercisesModule,
    TrainerWorkoutsComponent,
    TrainerRoutinesComponent //Replace with modules
  ]
})
export class TrainerModule {
 }
