import { ComponentPadding, ComponentFlexDirection, ComponentElevation, ComponentJustifyContent } from '@App/@models/components';
import { Component, HostBinding, Input } from '@angular/core';

export type CardVariation = 'standard' | 'outlined' | 'raised';
export type CardBorderStyle = 'standard' | 'shadow' | 'none';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() padding: ComponentPadding = 'medium';
  @Input() borderStyle: CardBorderStyle = 'none';
  @Input() flexDirection: ComponentFlexDirection = 'column';
  @Input() elevation: ComponentElevation = 'none';
  @Input() justifyContent: ComponentJustifyContent = 'flex-start';
  @Input() alignItems: ComponentJustifyContent = 'flex-start';

  @HostBinding('class.mat-elevation-z2') get isHighlightElevation() {
    return this.elevation === 'highlight';
  }

  @HostBinding('class.mat-elevation-z6') get isRaisedElevation() {
    return this.elevation === 'raised';
  }

  flexDirectionRecord: Record<ComponentFlexDirection, string> = {
    column: 'column',
    row: 'row'
  };

  paddingRecord: Record<ComponentPadding, string> = {
    none: '0',
    small: '0.5rem',
    medium: '1rem',
    large: '2rem'
  };
}
