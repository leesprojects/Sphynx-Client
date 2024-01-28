import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { FeatureFrameComponent } from '@Components/feature-frame/feature-frame.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

export type ExerciseCategory = 'Strength' | 'Flexibility' | 'Calisthenics' | 'Skill' | 'Cardio' | 'Other';

export interface IExerciseCard {
  id: number;
  name: string;
  description: string;
  category: ExerciseCategory;
  weighted?: boolean;
}

@Component({
  selector: 'app-trainer-dashboard',
  standalone: true,
  imports: [
    MatTableModule,
    MatDividerModule,
    FeatureFrameComponent,
    DragDropModule,

  ],
  templateUrl: './trainer-dashboard.component.html',
  styleUrl: './trainer-dashboard.component.scss'
})
export class TrainerDashboardComponent {
  exampleExerciseCards: IExerciseCard[] = [
    { id: 1, name: 'Front-Lever',                      description: '', category: 'Calisthenics'},
    { id: 2, name: 'Back-Lever',                       description: '', category: 'Calisthenics' },
    { id: 3, name: 'Dips',                             description: '', category: 'Calisthenics', weighted: true, },
    { id: 4, name: 'Pull-Ups',                         description: '', category: 'Calisthenics', weighted: true, },
    { id: 5, name: 'Chin-Ups',                         description: '', category: 'Calisthenics' },
    { id: 6, name: 'Press-Ups',                        description: '', category: 'Calisthenics', weighted: true, },
    { id: 7, name: 'Ring Front-Lever',                 description: '', category: 'Calisthenics'},
    { id: 8, name: 'Ring Back-Lever',                  description: '', category: 'Calisthenics' },
    { id: 9, name: 'Ring Dips',                        description: '', category: 'Calisthenics', weighted: true, },
    { id: 10, name: 'Ring Pull-Ups',                   description: '', category: 'Calisthenics', weighted: true, },
    { id: 11, name: 'Ring Chin-Ups',                   description: '', category: 'Calisthenics' },
    { id: 12, name: 'Press-Ups',                       description: '', category: 'Calisthenics', weighted: true, },
    { id: 13, name: 'Box Splits',                      description: '', category: 'Flexibility' },
    { id: 14, name: 'Left & Right Forward Splits',     description: '', category: 'Flexibility' },
    { id: 15, name: 'Benchpress',                      description: '', category: 'Strength' },
    { id: 16, name: 'Standing Bent-over V Pulls',      description: '', category: 'Strength' },
    { id: 17, name: 'Bicep Curls',                     description: '', category: 'Strength' },
    { id: 18, name: 'Deadlift',                        description: '', category: 'Strength' },
    { id: 19, name: 'Dumbbell Trap Shruggs',           description: '', category: 'Strength' },
    { id: 20, name: 'Anterior Deltoid Cable Raises',   description: '', category: 'Strength' },
    { id: 21, name: 'Medial Deltoid Cable Raises',     description: '', category: 'Strength' },
    { id: 22, name: 'Posterior Deltoid Cable Raises',  description: '', category: 'Strength' },
  ];
  displayedColumns: string[] = ['id', 'name', 'description', 'category', 'weighted'];

};
