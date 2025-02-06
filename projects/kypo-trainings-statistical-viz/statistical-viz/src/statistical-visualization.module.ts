import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppConfig, VIS_CONFIG } from './app.config';
import { D3Service } from '@cyberrangecz-platform/d3-service';
import { StatisticalVizComponent } from './statistical-viz.component';
import { StatisticalVizConfig } from '@cyberrangecz-platform/statistical-visualizations/internal';
import { StatisticalVizMaterialModule } from './statistical-viz-material.module';
import { InstanceStatisticsConcreteService } from './services/instance-statistics-concrete.service';
import { InstanceStatisticsApiService } from './services/api/instance-statistics-api.service';
import { InstanceStatisticsDefaultApiService } from './services/api/instance-statistics-default-api.service';
import { InstanceStatisticsService } from './services/instance-statistics.service';
import { FilterModule } from '@cyberrangecz-platform/statistical-visualizations/filters';
import { CombinedDiagramModule } from '@cyberrangecz-platform/statistical-visualizations/combined-diagram';
import { BarchartModule } from '@cyberrangecz-platform/statistical-visualizations/barchart';
import { BubblechartModule } from '@cyberrangecz-platform/statistical-visualizations/bubblechart';
import { RadarChartWrapperModule } from '@cyberrangecz-platform/statistical-visualizations/radar-chart-wrapper';
import { ScatterClustersWrapperModule } from '@cyberrangecz-platform/statistical-visualizations/scatter-clusters-wrapper';
import { ScatterplotModule } from '@cyberrangecz-platform/statistical-visualizations/scatterplot';
import { ClusteringWrapperModule } from '@cyberrangecz-platform/statistical-visualizations/clustering-wrapper';

@NgModule({
  declarations: [StatisticalVizComponent],
  exports: [StatisticalVizComponent],
  imports: [
    CommonModule,
    FormsModule,
    StatisticalVizMaterialModule,
    FilterModule,
    CombinedDiagramModule,
    ScatterplotModule,
    BarchartModule,
    BubblechartModule,
    RadarChartWrapperModule,
    ScatterClustersWrapperModule,
    ClusteringWrapperModule,
  ],
  providers: [
    D3Service,
    { provide: AppConfig, useValue: VIS_CONFIG },
    { provide: InstanceStatisticsService, useClass: InstanceStatisticsConcreteService },
    { provide: InstanceStatisticsApiService, useClass: InstanceStatisticsDefaultApiService },
  ],
})
export class StatisticalVisualizationModule {
  constructor(@Optional() @SkipSelf() parentModule: StatisticalVisualizationModule) {
    if (parentModule) {
      throw new Error('StatisticalVisualizationModule is already loaded. Import it in the main module only');
    }
  }

  static forRoot(config: StatisticalVizConfig): ModuleWithProviders<StatisticalVisualizationModule> {
    return {
      ngModule: StatisticalVisualizationModule,
      providers: [
        RadarChartWrapperModule.forRoot(config).providers,
        {
          provide: StatisticalVizConfig,
          useValue: config,
        },
        ScatterClustersWrapperModule.forRoot(config).providers,
        {
          provide: StatisticalVizConfig,
          useValue: config,
        },
        ClusteringWrapperModule.forRoot(config).providers,
        {
          provide: StatisticalVizConfig,
          useValue: config,
        },
      ],
    };
  }
}
