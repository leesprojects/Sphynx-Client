import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerComponent } from './trainer.component';
import { TrainerDynamicWorkoutComponent } from './trainer-dynamic-workout/trainer-dynamic-workout.component';
import { CardComponent } from '@Components/card/card.component';
import { FeatureFrameComponent } from '@Components/feature-frame/feature-frame.component';

@NgModule({
  declarations: [
    TrainerComponent,
    TrainerDynamicWorkoutComponent
  ],
  exports: [
    TrainerComponent
  ],
  imports: [
    CommonModule,
    CardComponent,
    FeatureFrameComponent
  ]
})
export class TrainerModule { }
