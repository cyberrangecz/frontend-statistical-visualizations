import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatDividerModule, MatGridListModule, MatRadioModule],
  exports: [MatCardModule, MatDividerModule, MatGridListModule, MatRadioModule],
})
export class ScatterplotMaterialModule {}
