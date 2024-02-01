import { IExercise, IRoutine, IWorkout } from "../../../@models/trainer";

export const HARDCODED_EXERCISES: IExercise[] = [
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

export const HARDCODED_WORKOUTS: IWorkout[] = [
  {
    id: 1,
    name: 'Calisthenics Routine',
    description: 'A skill & rings based routine',
    category: 'Calisthenics',
    exercises: HARDCODED_EXERCISES.filter(e => e.category === 'Calisthenics'),
  },
  {
    id: 2,
    name: 'Strength Routine',
    description: 'A strength based routine',
    category: 'Strength',
    exercises: HARDCODED_EXERCISES.filter(e => e.category === 'Strength'),
  }
];

export const HARDCODED_ROUTINES: IRoutine[] = [
  {
    id: 1,
    name: 'Calisthenics Routine',
    description: 'A skill & rings based routine',
    category: 'Calisthenics',
    workouts: HARDCODED_WORKOUTS
  }
];
