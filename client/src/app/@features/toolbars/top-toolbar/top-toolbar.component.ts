import { appRoutes } from '@App/app.routes';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-toolbar',
  standalone: false,
  templateUrl: './top-toolbar.component.html',
  styleUrl: './top-toolbar.component.scss'
})
export class TopToolbarComponent {
  routes = appRoutes

  constructor(private router: Router) {}

  onClick(route?: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }
}
