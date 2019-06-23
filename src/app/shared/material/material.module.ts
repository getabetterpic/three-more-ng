import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
  ],
  exports: [
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
