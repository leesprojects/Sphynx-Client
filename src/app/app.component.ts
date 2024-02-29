import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToolbarsModule } from '@Features/toolbars/toolbars.module';
import { TrainerModule } from '@Features/trainer/trainer.module';
import { IndexedDBModule } from './@data/_indexedDB.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ToolbarsModule,
    TrainerModule,
    IndexedDBModule
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Project Sphynx';


}
