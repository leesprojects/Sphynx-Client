import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';

@NgModule({
  declarations: [
    TopToolbarComponent
  ],
  exports: [
    TopToolbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ToolbarsModule { }
