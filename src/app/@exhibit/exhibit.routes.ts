import { APP_NAME } from '@App/global-values';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: APP_NAME,
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    title: APP_NAME,
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
