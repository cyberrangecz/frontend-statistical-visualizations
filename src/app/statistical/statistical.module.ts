import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {StatisticalOverviewComponent} from './statistical-overview.component';
import {StatisticalRoutingModule} from './statistical-routing.module';
import {CustomConfig} from '../custom-config';
import {KypoTrainingsStatisticalVizLibModule} from '../../../projects/kypo-trainings-statistical-viz-lib/src/public_api';

@NgModule({
  declarations: [
    StatisticalOverviewComponent
  ],
  imports: [
    CommonModule,
    StatisticalRoutingModule,
    KypoTrainingsStatisticalVizLibModule.forRoot(CustomConfig)
  ],
  exports: [
    StatisticalOverviewComponent
  ]
})
export class StatisticalModule {
}
