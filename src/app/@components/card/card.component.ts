import { Component, Input } from '@angular/core';

export type CardVariation = 'standard' | 'outlined' | 'raised';
export type CardPadding = 'standard' | 'compact' | 'comfortable';
export type CardBorderStyle = 'standard' | 'shadow' | 'none';
export type CardFlexDirection = 'row' | 'column';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() variation: CardVariation = 'standard';
  @Input() padding: CardPadding = 'standard';
  @Input() borderStyle: CardBorderStyle = 'none';
  @Input() flexDirection: CardFlexDirection = 'column';
}
