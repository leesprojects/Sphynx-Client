import { ComponentFlexDirection, ComponentPadding } from '@App/@models/components';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-frame',
  standalone: true,
  templateUrl: './feature-frame.component.html',
  styleUrl: './feature-frame.component.scss'
})
export class FeatureFrameComponent {
  @Input() flexDirection: ComponentFlexDirection = 'column';
  @Input() padding: ComponentPadding = 'medium';

  paddingRecord: Record<ComponentPadding, string> = {
    none: '0',
    small: '1rem',
    medium: '2rem',
    large: '3rem'
  };

  flexDirectionRecord: Record<ComponentFlexDirection, string> = {
    column: 'column',
    row: 'row'
  };
}
