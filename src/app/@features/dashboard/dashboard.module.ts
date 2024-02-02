import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FeatureFrameComponent } from '@Components/feature-frame/feature-frame.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FeatureFrameComponent,
    MatButtonModule
  ]
})
export class DashboardModule { }
