import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromGuards from './guards';

import { CardsPageComponent } from './components/cards-page/cards-page.component';
import { CardShowPageComponent } from './components/card-show-page/card-show-page.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [fromGuards.CardsGuard],
    component: CardsPageComponent,
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: ':cardId',
    canActivate: [fromGuards.CardExistsGuard],
    component: CardShowPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
