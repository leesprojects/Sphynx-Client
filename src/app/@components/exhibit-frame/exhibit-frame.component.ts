import { Component, Input } from '@angular/core';

export type ExhibitFrameSize = 'small' | 'medium' | 'large' | 'fill';

@Component({
  selector: 'app-exhibit-frame',
  standalone: true,
  imports: [],
  templateUrl: './exhibit-frame.component.html',
  styleUrl: './exhibit-frame.component.scss'
})
export class ExhibitFrameComponent {
  @Input() size: ExhibitFrameSize = 'medium';
}
