import { IExercise } from '@App/@models/trainer';
import { Component, Input } from '@angular/core';

export type ExerciseTableView = 'table' | 'card';

@Component({
  selector: 'app-exercises-table',
  templateUrl: './exercises-table.component.html',
  styleUrl: './exercises-table.component.scss'
})
export class ExercisesTableComponent {
  @Input({ required: true }) view: ExerciseTableView;
  @Input({ required: true }) exercises: IExercise[];
  @Input({ required: true }) columnsToRender: string[];
}
