import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClusteringWrapperComponent } from './clustering-wrapper.component';
import { StatisticalVizConfig } from '@cyberrangecz-platform/statistical-visualizations/internal';
import { TrainingsVisualizationOverviewLibModule } from '@cyberrangecz-platform/overview-visualization';
import { ClusteringWrapperMaterialModule } from './clustering-wrapper-material.module';

@NgModule({
  declarations: [ClusteringWrapperComponent],
  exports: [ClusteringWrapperComponent],
  imports: [CommonModule, ClusteringWrapperMaterialModule, TrainingsVisualizationOverviewLibModule],
})
export class ClusteringWrapperModule {
  static forRoot(config: StatisticalVizConfig): ModuleWithProviders<ClusteringWrapperModule> {
    return {
      ngModule: ClusteringWrapperModule,
      providers: [
        {
          provide: StatisticalVizConfig,
          useValue: config,
        },
        TrainingsVisualizationOverviewLibModule.forRoot(config).providers,
      ],
    };
  }
}
