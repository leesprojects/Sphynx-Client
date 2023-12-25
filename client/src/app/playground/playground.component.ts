import { Component } from '@angular/core';
import { SandpitObject } from './sandpit/sandpit.component';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {
  numbersArray: number[] = [1, 2, 3, 4, 5];
  sandpitObject: SandpitObject = {
    title: 'Sandpit Title',
    description: 'Sandpit Description',
    code: 'Sandpit Code'
  };
}
