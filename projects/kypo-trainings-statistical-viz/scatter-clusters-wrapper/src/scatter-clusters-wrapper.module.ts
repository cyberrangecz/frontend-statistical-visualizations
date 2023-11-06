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
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScatterClustersWrapperComponent } from './scatter-clusters-wrapper.component';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';

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
