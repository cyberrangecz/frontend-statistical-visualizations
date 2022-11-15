import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScatterClustersWrapperComponent } from './scatter-clusters-wrapper.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [ScatterClustersWrapperComponent],
  exports: [ScatterClustersWrapperComponent],
  imports: [
    CommonModule,
    KypoTrainingsClusteringVizLibModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [AxesCreationService, SvgConfigurationService, LegendCreationService, TooltipCreationService],
})
export class ScatterClustersWrapperModule {
  static forRoot(config: ClusteringVisualizationConfig): ModuleWithProviders<ScatterClustersWrapperModule> {
    return {
      ngModule: ScatterClustersWrapperModule,
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
