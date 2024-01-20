import { CardComponent } from '@Components/card/card.component';
import { ExhibitFrameComponent } from '@Components/exhibit-frame/exhibit-frame.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-styles-exhibit',
  standalone: true,
  imports: [
    ExhibitFrameComponent,
    CardComponent
  ],
  templateUrl: './styles-exhibit.component.html',
  styleUrl: './styles-exhibit.component.scss'
})
export class StylesExhibitComponent {
  colourStyles: string[] = [
    'colour-primary',
    'colour-secondary',
    'colour-tertiary',
    'text-colour-primary',
    'text-colour-secondary',
    'text-colour-tertiary',
  ]

  getGlobalColour(styleName: string): string {
    return getComputedStyle(document.documentElement).getPropertyValue(`--${styleName}`);
  }
}
