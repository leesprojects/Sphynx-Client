import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { SandpitComponent } from './sandpit/sandpit.component';

const components = [
  PlaygroundComponent,
  SandpitComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports: components,
})
export class PlaygroundModule { }
