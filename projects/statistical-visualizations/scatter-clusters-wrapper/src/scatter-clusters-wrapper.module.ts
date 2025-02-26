import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    AxesCreationService,
    LegendCreationService,
    SvgConfigurationService,
    TooltipCreationService,
} from '@crczp/statistical-visualizations/internal';
import {
    ClusteringVisualizationConfig,
    TrainingsClusteringVisualizationsModule,
} from '@crczp/clustering-visualization';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScatterClustersWrapperComponent } from './scatter-clusters-wrapper.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconButton } from '@angular/material/button';

@NgModule({
    declarations: [ScatterClustersWrapperComponent],
    exports: [ScatterClustersWrapperComponent],
    imports: [
        CommonModule,
        MatDividerModule,
        MatCardModule,
        MatGridListModule,
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatTooltipModule,
        TrainingsClusteringVisualizationsModule,
        MatIconButton,
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
                TrainingsClusteringVisualizationsModule.forRoot(config).providers,
            ],
        };
    }
}
