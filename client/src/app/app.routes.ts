import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExhibitComponent } from './@exhibit/exhibit.component';

const appName = 'Project Spyhnx'

export const routes: Routes = [
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
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'playground',
    title: appName + ' - Playground',
    loadChildren: () => import('./playground/playground.module').then(m => m.PlaygroundModule)
  },
  {
    path: 'indexed-db',
    title: appName + ' - IndexedDB',
    loadChildren: () => import('./indexed-db/indexed-db.module').then(m => m.IndexedDBModule)
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
