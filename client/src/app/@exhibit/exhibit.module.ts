import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitComponent } from './exhibit.component';
import { CardExhibitComponent } from './card/card-exhibit.component';
import { ButtonExhibitComponent } from './button/button-exhibit.component';

@NgModule({
  declarations: [
    ExhibitComponent
  ],
  imports: [
    CommonModule,
    CardExhibitComponent,
    ButtonExhibitComponent
  ]
})
export class ExhibitModule { }
