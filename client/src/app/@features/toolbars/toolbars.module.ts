import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { ButtonComponent } from '@Components/button/button.component';
import { CardComponent } from '@Components/card/card.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const components = [
  TopToolbarComponent,
  SidenavComponent
]

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    ButtonComponent,
    CardComponent,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ToolbarsModule { }
