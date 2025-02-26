import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClusteringWrapperComponent } from './clustering-wrapper.component';
import { StatisticalVizConfig } from '@crczp/statistical-visualizations/internal';
import { ClusteringWrapperMaterialModule } from './clustering-wrapper-material.module';
import { TrainingsClusteringVisualizationsModule } from '@crczp/clustering-visualization';
import { TrainingsVisualizationsOverviewLibModule } from '@crczp/overview-visualization';

@NgModule({
    declarations: [ClusteringWrapperComponent],
    exports: [ClusteringWrapperComponent],
    imports: [
        CommonModule,
        ClusteringWrapperMaterialModule,
        TrainingsClusteringVisualizationsModule,
        TrainingsVisualizationsOverviewLibModule,
    ],
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
                TrainingsClusteringVisualizationsModule.forRoot(config).providers,
            ],
        };
    }
}
