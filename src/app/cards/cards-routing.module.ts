import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsPageComponent } from './cards-page/cards-page.component';
import { CardShowPageComponent } from './card-show-page/card-show-page.component';

const routes: Routes = [
  {
    path: '',
    component: CardsPageComponent
  },
  {
    path: ':cardId',
    component: CardShowPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
