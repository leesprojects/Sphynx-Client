import { Component, HostBinding, Input } from '@angular/core';

export type CardVariation = 'standard' | 'outlined' | 'raised';
export type CardPadding = 'none' | 'standard' | 'light' | 'heavy';
export type CardBorderStyle = 'standard' | 'shadow' | 'none';
export type CardFlexDirection = 'row' | 'column';
export type CardElevation = 'none' | 'highlight' | 'raised';
export type CardJustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  // @Input() variation: CardVariation = 'standard';
  @Input() padding: CardPadding = 'standard';
  @Input() borderStyle: CardBorderStyle = 'none';
  @Input() flexDirection: CardFlexDirection = 'column';
  @Input() elevation: CardElevation = 'none';
  @Input() justifyContent: CardJustifyContent = 'flex-start';
  @Input() alignItems: CardJustifyContent = 'flex-start';

  @HostBinding('class.mat-elevation-z2') get isHighlightElevation() {
    return this.elevation === 'highlight';
  }

  @HostBinding('class.mat-elevation-z6') get isRaisedElevation() {
    return this.elevation === 'raised';
  }
}
