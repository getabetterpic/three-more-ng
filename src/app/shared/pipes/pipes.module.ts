import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTextTransformPipe } from './card-text-transform.pipe';

@NgModule({
  declarations: [CardTextTransformPipe],
  exports: [
    CardTextTransformPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
