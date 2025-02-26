import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadarChartWrapperComponent } from './radar-chart-wrapper.component';
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
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconButton } from '@angular/material/button';

@NgModule({
    declarations: [RadarChartWrapperComponent],
    exports: [RadarChartWrapperComponent],
    imports: [
        CommonModule,
        TrainingsClusteringVisualizationsModule,
        MatDividerModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconButton,
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
                TrainingsClusteringVisualizationsModule.forRoot(config).providers,
            ],
        };
    }
}
