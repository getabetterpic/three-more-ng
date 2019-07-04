import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@/app/shared/shared.module';

import { CardListComponent } from './card-list/card-list.component';
import { CardsPageComponent } from './cards-page/cards-page.component';
import { CardShowPageComponent } from './card-show-page/card-show-page.component';

@NgModule({
  declarations: [
    CardListComponent,
    CardsPageComponent,
    CardShowPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    CardListComponent,
    CardsPageComponent,
    CardShowPageComponent
  ]
})
export class ComponentsModule { }
