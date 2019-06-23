import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CardsRoutingModule } from './cards-routing.module';

import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  declarations: [CardListComponent],
  imports: [
    CommonModule,
    CardsRoutingModule,
    SharedModule
  ]
})
export class CardsModule { }
