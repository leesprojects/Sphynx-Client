import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitComponent } from './exhibit.component';
import { CardExhibitComponent } from './card/card-exhibit.component';
import { ButtonExhibitComponent } from './button/button-exhibit.component';
import { StylesExhibitComponent } from './styles/styles-exhibit.component';
import { CardComponent } from '@Components/card/card.component';
import { GridExhibitComponent } from './grid-exhibit/grid-exhibit.component';
import { FeatureFrameComponent } from '@Components/feature-frame/feature-frame.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    ExhibitComponent
  ],
  imports: [
    CommonModule,
    CardComponent,
    CardExhibitComponent,
    ButtonExhibitComponent,
    StylesExhibitComponent,
    GridExhibitComponent,
    FeatureFrameComponent,
    MatDividerModule
  ]
})
export class ExhibitModule { }
