import { APP_ROUTE_TO_TITLE_MAP, APP_ROUTES } from '@App/app.routes';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: false,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  private _routes = APP_ROUTES;
  routeToTitleMap = APP_ROUTE_TO_TITLE_MAP;

  routesToRender: Route[];
  sidenavToggled = false;

  constructor(
    private _router: Router
  ) {
    this.routesToRender = this._routes.filter(route => !!route.component);
  }

  onNavigationButtonClick(route: Route): void {
    this._router.navigate([route.path]);
    this.sidenavToggled = false;
  }

  onToggleSidenav() {
    this.sidenavToggled = !this.sidenavToggled;
  }

  onSidenavOpened() {
    //
  }

  onSidenavClosed() {
    //
  }
}
