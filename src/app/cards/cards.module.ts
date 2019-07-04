import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ComponentsModule } from './components/components.module';
import { CardsRoutingModule } from './cards-routing.module';

// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './store';
import { CardEffects } from './store/effects/card.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('cards', reducers),
    EffectsModule.forFeature([CardEffects]),
    CardsRoutingModule,
    SharedModule,
    ComponentsModule
  ]
})
export class CardsModule { }
