import { IExercise } from '@App/@models/trainer';
import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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

  exerciseTitle: string[] = ['A', 'B', 'C'];
  exerciseDropList: IExercise[] = [
    {
      id: 1,
      name: 'Bench Press',
      description: 'The bench press is an upper-body weight training exercise in which the trainee presses a weight upwards while lying on a weight training bench.',
      category: 'Calisthenics'
    }
  ];
  workoutExerciseDropList: string[] = ['D'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
