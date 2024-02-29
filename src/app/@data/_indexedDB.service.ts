import { IExercise } from "@App/@models/trainer";
import { NgModule } from "@angular/core";
import { NgxIndexedDBModule, NgxIndexedDBService } from "ngx-indexed-db";
import { DB_CONFIG } from "./_indexedDB";

@NgModule({
  imports: [NgxIndexedDBModule.forRoot(DB_CONFIG)]
})
export class IndexedDBModule {

  constructor(
    private _indexedDBService: NgxIndexedDBService
  ) {
    console.log("IndexedDBModule loaded");
  }

  private addToDatabaseExample(): void {
    this._indexedDBService.add("exercises", {
      name: "Bench Press", description: "Lift the barbell from your chest", category: "Strength", weighted: true
    }).subscribe(key => {
      console.log("IndexedDB Added {Exercises} - Key: ", key);
    });

    this._indexedDBService.add("routines", {
      name: "Chest Day", description: "A day dedicated to chest exercises", category: "Strength", workouts: []
    }).subscribe(key => {
      console.log("IndexedDB Added {Routines} - Key: ", key);
    });
  }
}
