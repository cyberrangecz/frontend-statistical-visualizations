import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadarChartWrapperComponent } from './radar-chart-wrapper.component';
import {
  AxesCreationService,
  LegendCreationService,
  SvgConfigurationService,
  TooltipCreationService,
} from '@cyberrangecz-platform/statistical-visualizations/internal';
import {
  ClusteringVisualizationConfig,
  TrainingsClusteringVizLibModule,
} from '@cyberrangecz-platform/clustering-visualization';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [RadarChartWrapperComponent],
  exports: [RadarChartWrapperComponent],
  imports: [
    CommonModule,
    TrainingsClusteringVizLibModule,
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
        TrainingsClusteringVizLibModule.forRoot(config).providers,
      ],
    };
  }
}
