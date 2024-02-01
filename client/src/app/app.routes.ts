import { Routes } from '@angular/router';
import { ExhibitComponent } from './@exhibit/exhibit.component';
import { DashboardComponent } from '@Features/dashboard/dashboard.component';
import { APP_NAME } from './global-values';
import { TrainerComponent } from '@Features/trainer/trainer.component';

export const APP_ROUTE_TO_TITLE_MAP = new Map<string, string>([
  ['dashboard', 'Dashboard'],
  ['exhibit', 'Exhibit'],
  ['trainer-dashboard', 'Trainer Dashboard']
]);

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/trainer',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    title: APP_NAME,
    component: DashboardComponent,
    loadChildren: () => import('./@features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'trainer',
    title: APP_NAME + ' - Trainer',
    component: TrainerComponent,
    loadChildren: () => import('@Features/trainer/trainer.module').then(m => m.TrainerModule)
  },
  {
    path: 'exhibit',
    title: APP_NAME + ' - Exhibit',
    component: ExhibitComponent,
    loadChildren: () => import('./@exhibit/exhibit.module').then(m => m.ExhibitModule)
  },
  {
    path: '**',
    redirectTo: '/trainer',
    pathMatch: 'full'
  }
];
