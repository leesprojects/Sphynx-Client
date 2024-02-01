import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerComponent } from './trainer.component';
import { TrainerDashboardModule } from './dashboard/trainer-dashboard.module';

@NgModule({
  declarations: [
    TrainerComponent
  ],
  imports: [
    CommonModule,
    TrainerDashboardModule
  ]
})
export class TrainerModule {
 }
