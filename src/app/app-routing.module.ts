import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from '@/app/auth0/components/callback/callback.component';
import { ProfileComponent } from '@/app/auth0/components/profile/profile.component';
import { AuthGuard } from '@/app/guards/auth.guard';

const routes: Routes = [
  {
    path: 'cards',
    loadChildren: () => import('./cards/cards.module').then(mod => mod.CardsModule)
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'cards',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
