import { Component, Input } from '@angular/core';

export interface SandpitObject {
  title: string;
  description: string;
  code: string;
}

@Component({
  selector: 'app-sandpit',
  templateUrl: './sandpit.component.html',
  styleUrl: './sandpit.component.scss'
})
export class SandpitComponent {
  @Input() sandpitObject: SandpitObject | undefined;
}
