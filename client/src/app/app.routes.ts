import { Routes } from '@angular/router';
import { ExhibitComponent } from './@exhibit/exhibit.component';
import { DashboardComponent } from '@Features/dashboard/dashboard.component';
import { appName } from './global-values';

export const appRoutes: Routes = [
  {
    path: '',
    title: appName,
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    title: appName,
    component: DashboardComponent,
    loadChildren: () => import('./@features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'exhibit',
    title: appName + ' - Exhibit',
    component: ExhibitComponent,
    loadChildren: () => import('./@exhibit/exhibit.module').then(m => m.ExhibitModule)
  },
  {
    path: '**',
    title: appName,
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
