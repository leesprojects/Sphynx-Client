import { IExercise } from "@App/@models/trainer";
import { Injectable } from "@angular/core";
import { APIService } from "../api.service";

@Injectable({ providedIn: 'root' })
export class ExerciseDataService {

  constructor(private _apiService: APIService) {}

  getAllExercises(): Promise<IExercise[]> {
    return this._apiService.get('exercise');
  }

}
