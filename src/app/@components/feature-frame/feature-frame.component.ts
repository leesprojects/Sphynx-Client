import { CardFlexDirection } from '@Components/card/card.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-frame',
  standalone: true,
  templateUrl: './feature-frame.component.html',
  styleUrl: './feature-frame.component.scss'
})
export class FeatureFrameComponent {
  @Input() flexDirection: CardFlexDirection = 'column';
}
