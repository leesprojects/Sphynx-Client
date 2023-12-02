import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { ToolbarsModule } from './toolbars/toolbars.module';
import { IndexedDBService } from './indexeddb.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DashboardModule, ToolbarsModule],
  providers: [IndexedDBService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Project Sphynx';
}
