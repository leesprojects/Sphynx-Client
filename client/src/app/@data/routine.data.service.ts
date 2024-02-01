import { IExercise } from "@App/@models/trainer";
import { HARDCODED_ROUTINES } from "@Features/trainer/dashboard/trainer-dashboard-hardcoded-data";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class RoutineDataService {

  getRoutines(): Promise<IExercise[]> {
    return Promise.resolve(HARDCODED_ROUTINES);
  }

}
