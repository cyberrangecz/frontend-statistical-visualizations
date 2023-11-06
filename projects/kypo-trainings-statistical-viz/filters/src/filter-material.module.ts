import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';

@NgModule({
  imports: [CommonModule, MatCardModule, MatGridListModule, MatCheckboxModule],
  exports: [MatCardModule, MatGridListModule, MatCheckboxModule],
})
export class FilterMaterialModule {}
