import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScatterplotComponent } from './scatterplot.component';
import { ScatterplotMaterialModule } from './scatterplot-material.module';
import {
    AxesCreationService,
    LegendCreationService,
    SvgConfigurationService,
    TooltipCreationService,
} from '@crczp/statistical-visualizations/internal';

@NgModule({
    declarations: [ScatterplotComponent],
    imports: [CommonModule, ScatterplotMaterialModule],
    exports: [ScatterplotComponent],
    providers: [AxesCreationService, SvgConfigurationService, LegendCreationService, TooltipCreationService],
})
export class ScatterplotModule {}
