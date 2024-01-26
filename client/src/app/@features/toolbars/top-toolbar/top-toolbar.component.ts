import { APP_ROUTES } from '@App/app.routes';
import { APP_NAME } from '@App/global-values';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrl: './top-toolbar.component.scss'
})
export class TopToolbarComponent {
  routes = APP_ROUTES
  appName = APP_NAME

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private router: Router) {}

  onClick(route?: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

  emitToggleSidenav() {
    this.toggleSidenav.emit();
  }
}
