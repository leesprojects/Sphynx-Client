import { Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-top-toolbar',
  standalone: false,
  templateUrl: './top-toolbar.component.html',
  styleUrl: './top-toolbar.component.scss'
})
export class TopToolbarComponent {
  routes = routes
}
