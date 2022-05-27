import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [CommonModule, MatDividerModule, MatCardModule, MatGridListModule],
  exports: [MatDividerModule, MatCardModule, MatGridListModule],
})
export class CombinedDiagramMaterialModule {}
