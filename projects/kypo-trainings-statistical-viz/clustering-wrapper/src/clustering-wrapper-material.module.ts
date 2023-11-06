import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatDividerModule],
  exports: [MatCardModule, MatDividerModule],
})
export class ClusteringWrapperMaterialModule {}
