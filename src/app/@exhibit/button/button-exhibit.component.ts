import { ButtonComponent } from '@Components/button/button.component';
import { CardComponent } from '@Components/card/card.component';
import { ExhibitFrameComponent } from '@Components/exhibit-frame/exhibit-frame.component';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-button-exhibit',
  standalone: true,
  imports: [
    ExhibitFrameComponent,
    ButtonComponent,
    CardComponent,
    MatButton
  ],
  templateUrl: './button-exhibit.component.html',
  styleUrl: './button-exhibit.component.scss'
})
export class ButtonExhibitComponent {
  buttonClickedMessage: string = '';

  onClick() {
    this.buttonClickedMessage = `Button clicked at: `.concat(new Date().toLocaleString());
  }

}
