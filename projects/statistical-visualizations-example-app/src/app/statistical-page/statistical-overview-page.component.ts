import { Component } from '@angular/core';

@Component({
    selector: 'app-statistical-page-overview',
    templateUrl: './statistical-overview-page.component.html',
    styleUrls: ['./statistical-overview-page.component.css'],
})
export class StatisticalOverviewPageComponent {
    trainingDefinitionId: number;
    trainingInstanceId: number;

    constructor() {
        this.trainingDefinitionId = 1;
        this.trainingInstanceId = 3;
    }

    detailView(instanceId: number): void {
        console.log(`Redirect to Instance with id: ${instanceId}`);
    }
}
