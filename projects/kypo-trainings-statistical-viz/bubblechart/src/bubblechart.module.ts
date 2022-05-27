import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubblechartMaterialModule } from './bubblechart-material.module';
import { BubblechartComponent } from './bubblechart.component';
import {
  AxesCreationService,
  LegendCreationService,
  SvgConfigurationService,
  TooltipCreationService,
} from '@muni-kypo-crp/statistical-visualizations/internal';

@NgModule({
  declarations: [BubblechartComponent],
  imports: [CommonModule, BubblechartMaterialModule],
  providers: [AxesCreationService, SvgConfigurationService, LegendCreationService, TooltipCreationService],
  exports: [BubblechartComponent],
})
export class BubblechartModule {}
