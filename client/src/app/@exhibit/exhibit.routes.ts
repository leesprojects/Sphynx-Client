import { appName } from '@App/global-values';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: appName,
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    title: appName,
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
