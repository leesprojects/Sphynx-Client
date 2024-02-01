import { IExercise } from "@App/@models/trainer";
import { HARDCODED_EXERCISES } from "@Features/trainer/dashboard/trainer-dashboard-hardcoded-data";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ExerciseDataService {

  getExercises(): Promise<IExercise[]> {
    return Promise.resolve(HARDCODED_EXERCISES);
  }

}
