import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { FeatureFrameComponent } from '@Components/feature-frame/feature-frame.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CardComponent } from '@Components/card/card.component';

const components = [
  UserComponent,
  ProfileComponent,
  AccountComponent
]

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    FeatureFrameComponent,
    MatTabsModule,
    CardComponent
  ]
})
export class UserModule { }
