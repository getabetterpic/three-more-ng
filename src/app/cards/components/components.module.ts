import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@/app/shared/shared.module';

import { CardListComponent } from './card-list/card-list.component';
import { CardsPageComponent } from './cards-page/cards-page.component';
import { CardShowPageComponent } from './card-show-page/card-show-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  declarations: [
    CardListComponent,
    CardsPageComponent,
    CardShowPageComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    CardListComponent,
    CardsPageComponent,
    CardShowPageComponent,
    SearchPageComponent
  ]
})
export class ComponentsModule { }
