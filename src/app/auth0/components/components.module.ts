import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallbackComponent } from '@/app/auth0/components/callback/callback.component';
import { ProfileComponent } from '@/app/auth0/components/profile/profile.component';

@NgModule({
  declarations: [
    CallbackComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CallbackComponent,
    ProfileComponent
  ]
})
export class ComponentsModule { }
