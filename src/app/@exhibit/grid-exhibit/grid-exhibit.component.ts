import { CardComponent } from '@Components/card/card.component';
import { ExhibitFrameComponent } from '@Components/exhibit-frame/exhibit-frame.component';
import { GridComponent } from '@Components/grid/grid.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-exhibit',
  standalone: true,
  imports: [
    GridComponent,
    ExhibitFrameComponent,
    CardComponent
  ],
  templateUrl: './grid-exhibit.component.html',
  styleUrl: './grid-exhibit.component.scss'
})
export class GridExhibitComponent {

}
