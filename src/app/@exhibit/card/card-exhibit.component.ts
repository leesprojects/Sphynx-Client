import { CardComponent } from '@Components/card/card.component';
import { ExhibitFrameComponent } from '@Components/exhibit-frame/exhibit-frame.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-exhibit',
  standalone: true,
  imports: [
    ExhibitFrameComponent,
    CardComponent
  ],
  templateUrl: './card-exhibit.component.html',
  styleUrl: './card-exhibit.component.scss'
})
export class CardExhibitComponent {

}
