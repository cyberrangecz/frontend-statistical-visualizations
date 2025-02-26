import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticalOverviewPageComponent } from './statistical-overview-page.component';

const routes: Routes = [
    {
        path: '',
        component: StatisticalOverviewPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StatisticalRoutingPageModule {}
