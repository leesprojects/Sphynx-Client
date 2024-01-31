import { Routes } from '@angular/router';
import { ExhibitComponent } from './@exhibit/exhibit.component';
import { DashboardComponent } from '@Features/dashboard/dashboard.component';
import { APP_NAME } from './global-values';
import { TrainerDashboardComponent } from '@Features/trainer-dashboard/trainer-dashboard.component';

export const APP_ROUTE_TO_TITLE_MAP = new Map<string, string>([
  ['dashboard', 'Dashboard'],
  ['exhibit', 'Exhibit'],
  ['trainer-dashboard', 'Trainer Dashboard']
]);

export const APP_ROUTES: Routes = [
  {
    path: '',
    title: APP_NAME,
    redirectTo: '/trainer-dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    title: APP_NAME,
    component: DashboardComponent,
    loadChildren: () => import('./@features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'trainer-dashboard',
    title: APP_NAME + ' - Trainer Dashboard',
    component: TrainerDashboardComponent,
    loadChildren: () => import('./@features/trainer-dashboard/trainer-dashboard.module').then(m => m.TrainerDashboardModule)
  },
  {
    path: 'exhibit',
    title: APP_NAME + ' - Exhibit',
    component: ExhibitComponent,
    loadChildren: () => import('./@exhibit/exhibit.module').then(m => m.ExhibitModule)
  },
  {
    path: '**',
    title: APP_NAME,
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
