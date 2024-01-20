import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitComponent } from './exhibit.component';
import { CardExhibitComponent } from './card/card-exhibit.component';
import { ButtonExhibitComponent } from './button/button-exhibit.component';
import { StylesExhibitComponent } from './styles/styles-exhibit.component';
import { CardComponent } from '@Components/card/card.component';

@NgModule({
  declarations: [
    ExhibitComponent
  ],
  imports: [
    CommonModule,
    CardComponent,
    CardExhibitComponent,
    ButtonExhibitComponent,
    StylesExhibitComponent
  ]
})
export class ExhibitModule { }
