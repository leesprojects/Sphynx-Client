import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { FeatureFrameComponent } from '@Components/feature-frame/feature-frame.component';
import { MatTabsModule } from '@angular/material/tabs';

const components = [
  UserComponent
]

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    FeatureFrameComponent,
    ProfileComponent,
    AccountComponent,
    MatTabsModule
  ]
})
export class UserModule { }
