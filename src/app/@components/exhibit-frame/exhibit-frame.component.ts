import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-exhibit-frame',
  standalone: true,
  imports: [],
  templateUrl: './exhibit-frame.component.html',
  styleUrl: './exhibit-frame.component.scss'
})
export class ExhibitFrameComponent {
  @Input() title: string;
}
