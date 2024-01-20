import { ButtonComponent } from '@Components/button/button.component';
import { ExhibitFrameComponent } from '@Components/exhibit-frame/exhibit-frame.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button-exhibit',
  standalone: true,
  imports: [
    ExhibitFrameComponent,
    ButtonComponent
  ],
  templateUrl: './button-exhibit.component.html',
  styleUrl: './button-exhibit.component.scss'
})
export class ButtonExhibitComponent {

}
