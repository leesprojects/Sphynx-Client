import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from './showcase.component';
import { ShowcaseMainComponent } from './main/showcase-main.component';

const components = [
  ShowcaseComponent,
  ShowcaseMainComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports: components
})
export class ShowcaseModule { }
