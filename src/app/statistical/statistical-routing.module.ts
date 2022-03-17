import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StatisticalOverviewComponent} from './statistical-overview.component';

const routes: Routes = [
  {
    path: '',
    component: StatisticalOverviewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticalRoutingModule {

}
