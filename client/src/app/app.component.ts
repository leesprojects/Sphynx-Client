import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { ToolbarsModule } from './toolbars/toolbars.module';
import { IndexedDBModule } from './indexed-db/indexed-db.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DashboardModule, ToolbarsModule, IndexedDBModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Project Sphynx';

  constructor() {
    console.log(`App Component Initialised`)
  }
}
