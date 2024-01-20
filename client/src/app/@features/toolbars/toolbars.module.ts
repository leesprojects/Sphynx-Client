import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { ButtonComponent } from '@Components/button/button.component';
import { CardComponent } from '@Components/card/card.component';

@NgModule({
  declarations: [
    TopToolbarComponent
  ],
  exports: [
    TopToolbarComponent
  ],
  imports: [
    CommonModule,
    ButtonComponent,
    CardComponent
  ]
})
export class ToolbarsModule { }
