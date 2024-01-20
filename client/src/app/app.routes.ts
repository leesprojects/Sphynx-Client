import { Routes } from '@angular/router';
import { ExhibitComponent } from './@exhibit/exhibit.component';
import { DashboardComponent } from '@Features/dashboard/dashboard.component';

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
    loadChildren: () => import('./@features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'playground',
    title: appName + ' - Playground',
    loadChildren: () => import('./@features/playground/playground.module').then(m => m.PlaygroundModule)
  },
  {
    path: 'indexed-db',
    title: appName + ' - IndexedDB',
    loadChildren: () => import('./@features/indexed-db/indexed-db.module').then(m => m.IndexedDBModule)
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
