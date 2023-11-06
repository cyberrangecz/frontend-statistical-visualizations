import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatDividerModule, MatGridListModule, MatRadioModule],
  exports: [MatCardModule, MatDividerModule, MatGridListModule, MatRadioModule],
})
export class ScatterplotMaterialModule {}
