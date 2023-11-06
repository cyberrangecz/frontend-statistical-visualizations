import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadarChartWrapperComponent } from './radar-chart-wrapper.component';
import {
  AxesCreationService,
  LegendCreationService,
  SvgConfigurationService,
  TooltipCreationService,
} from '@muni-kypo-crp/statistical-visualizations/internal';
import {
  ClusteringVisualizationConfig,
  KypoTrainingsClusteringVizLibModule,
} from '@muni-kypo-crp/clustering-visualization';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';

@NgModule({
  declarations: [RadarChartWrapperComponent],
  exports: [RadarChartWrapperComponent],
  imports: [
    CommonModule,
    KypoTrainingsClusteringVizLibModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [AxesCreationService, SvgConfigurationService, LegendCreationService, TooltipCreationService],
})
export class RadarChartWrapperModule {
  static forRoot(config: ClusteringVisualizationConfig): ModuleWithProviders<RadarChartWrapperModule> {
    return {
      ngModule: RadarChartWrapperModule,
      providers: [
        {
          provide: ClusteringVisualizationConfig,
          useValue: config,
        },
        KypoTrainingsClusteringVizLibModule.forRoot(config).providers,
      ],
    };
  }
}
