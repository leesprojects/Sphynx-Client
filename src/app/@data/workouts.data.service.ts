import { IExercise } from "@App/@models/trainer";
import { HARDCODED_WORKOUTS } from "@Features/trainer/trainer-dashboard-hardcoded-data";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class WorkoutsDataService {

  getWorkouts(): Promise<IExercise[]> {
    return Promise.resolve(HARDCODED_WORKOUTS);
  }

}
