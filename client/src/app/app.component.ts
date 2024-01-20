import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToolbarsModule } from '@Features/toolbars/toolbars.module';
import { IndexedDBModule } from '@Features/indexed-db/indexed-db.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    IndexedDBModule,
    ToolbarsModule,
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Project Sphynx';
}
