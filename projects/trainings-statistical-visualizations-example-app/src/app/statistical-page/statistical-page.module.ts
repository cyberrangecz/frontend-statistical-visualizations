import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatisticalOverviewPageComponent } from './statistical-overview-page.component';
import { StatisticalRoutingPageModule } from './statistical-routing-page.module';
import { environment } from '../../environments/environment';
import { StatisticalVisualizationModule } from '@cyberrangecz-platform/statistical-visualizations/statistical-viz';

@NgModule({
  declarations: [StatisticalOverviewPageComponent],
  imports: [
    CommonModule,
    StatisticalRoutingPageModule,
    StatisticalVisualizationModule.forRoot(environment.statisticalVizConfig),
  ],
})
export class StatisticalPageModule {}
