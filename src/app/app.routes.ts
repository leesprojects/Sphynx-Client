import { ExhibitComponent } from '@Exhibit/exhibit.component';
import { DashboardComponent } from '@Features/dashboard/dashboard.component';
import { UserComponent } from '@Features/user/user.component';
import { Routes } from '@angular/router';
import { APP_NAME } from './global-values';
import { TrainerLibraryComponent } from '@Features/trainer-library/trainer-library.component';
import { TrainerComponent } from '@Features/trainer/trainer.component';

export const APP_ROUTE_TO_TITLE_MAP = new Map<string, string>([
  ['dashboard', 'Dashboard'],
  ['trainer', 'Trainer'],
  ['trainer-library', 'Trainer Library'],
  // ['exhibit', 'Exhibit'],
  ['profile', 'Profile']
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
    loadChildren: () => import('./@features/trainer/trainer.module').then(m => m.TrainerModule)
  },
  {
    path: 'trainer-library',
    title: APP_NAME + ' - Trainer Library',
    component: TrainerLibraryComponent,
    loadChildren: () => import('@Features/trainer-library/trainer-library.module').then(m => m.TrainerLibraryModule)
  },
  {
    path: 'exhibit',
    title: APP_NAME + ' - Exhibit',
    component: ExhibitComponent,
    loadChildren: () => import('./@exhibit/exhibit.module').then(m => m.ExhibitModule)
  },
  {
    path: 'profile',
    title: APP_NAME + ' - Profile',
    component: UserComponent,
    loadChildren: () => import('./@features/user/user.module').then(m => m.UserModule)
  },
  {
    path: '**',
    redirectTo: '/trainer',
    pathMatch: 'full'
  }
];
