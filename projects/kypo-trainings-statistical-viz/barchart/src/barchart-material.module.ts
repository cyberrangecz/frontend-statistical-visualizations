import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatDividerModule, MatGridListModule, MatRadioModule, MatCheckboxModule],
  exports: [MatCardModule, MatDividerModule, MatGridListModule, MatRadioModule, MatCheckboxModule],
})
export class BarchartMaterialModule {}
