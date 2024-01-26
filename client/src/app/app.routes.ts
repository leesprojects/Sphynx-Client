import { Routes } from '@angular/router';
import { ExhibitComponent } from './@exhibit/exhibit.component';
import { DashboardComponent } from '@Features/dashboard/dashboard.component';
import { appName } from './global-values';
import { TrainerDashboardComponent } from '@Features/trainer-dashboard/trainer-dashboard.component';

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
    path: 'trainer-dashboard',
    title: appName + ' - Trainer Dashboard',
    component: TrainerDashboardComponent
  },
  {
    path: '**',
    title: appName,
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
