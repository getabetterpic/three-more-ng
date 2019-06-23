import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';

import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  declarations: [SearchInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [SearchInputComponent]
})
export class ComponentsModule { }
