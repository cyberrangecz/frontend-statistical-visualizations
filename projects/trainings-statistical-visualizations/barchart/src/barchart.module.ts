import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarchartMaterialModule } from './barchart-material.module';
import { BarchartComponent } from './barchart.component';
import {
  AxesCreationService,
  LegendCreationService,
  SvgConfigurationService,
  TooltipCreationService,
} from '@cyberrangecz-platform/statistical-visualizations/internal';

@NgModule({
  declarations: [BarchartComponent],
  imports: [CommonModule, BarchartMaterialModule],
  exports: [BarchartComponent],
  providers: [AxesCreationService, SvgConfigurationService, LegendCreationService, TooltipCreationService],
})
export class BarchartModule {}
