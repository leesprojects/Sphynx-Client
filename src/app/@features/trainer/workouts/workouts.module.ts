import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TrainerWorkoutsComponent } from "./workouts.component";
import { CardComponent } from "@Components/card/card.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatDividerModule } from "@angular/material/divider";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatDividerModule,
    DragDropModule,
    CardComponent
  ],
  declarations: [TrainerWorkoutsComponent],
})
export class WorkoutsModule {}

