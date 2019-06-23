import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CardsRoutingModule } from './cards-routing.module';

import { CardListComponent } from './card-list/card-list.component';
import { CardsPageComponent } from './cards-page/cards-page.component';
import { CardShowPageComponent } from './card-show-page/card-show-page.component';

@NgModule({
  declarations: [CardListComponent, CardsPageComponent, CardShowPageComponent],
  imports: [
    CommonModule,
    CardsRoutingModule,
    SharedModule
  ]
})
export class CardsModule { }
