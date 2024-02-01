export type ExerciseCategory = 'Strength' | 'Flexibility' | 'Calisthenics' | 'Skill' | 'Cardio' | 'Other';

export interface IExercise {
  id: number;
  name: string;
  description: string;
  category: ExerciseCategory;
  weighted?: boolean;
};

export interface IWorkout {
  id: number;
  name: string;
  description: string;
  category: ExerciseCategory;
  exercises: IExercise[];
};

export interface IRoutine {
  id: number;
  name: string;
  description: string;
  category: ExerciseCategory;
  workouts: IWorkout[];
};
