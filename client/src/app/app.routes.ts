import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowcaseComponent } from './showcase/showcase.component';

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
    path: 'showcase',
    title: appName + ' - Showcase',
    component: ShowcaseComponent,
    loadChildren: () => import('./showcase/showcase.module').then(m => m.ShowcaseModule)
  },
  {
    path: '**',
    title: appName,
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
