import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombinedDiagramComponent } from './combined-diagram.component';
import { CombinedDiagramMaterialModule } from './combined-diagram-material.module';
import {
  AxesCreationService,
  LegendCreationService,
  SvgConfigurationService,
  TooltipCreationService,
} from '@cyberrangecz-platform/statistical-visualizations/internal';

@NgModule({
  declarations: [CombinedDiagramComponent],
  exports: [CombinedDiagramComponent],
  imports: [CommonModule, CombinedDiagramMaterialModule],
  providers: [AxesCreationService, SvgConfigurationService, LegendCreationService, TooltipCreationService],
})
export class CombinedDiagramModule {}
