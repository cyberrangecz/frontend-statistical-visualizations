import { AfterContentChecked, ApplicationRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TrainingInstanceStatistics } from '@cyberrangecz-platform/statistical-visualizations/internal';
import * as d3 from 'd3';

@Component({
  selector: 'crczp-radar-chart-wrapper',
  templateUrl: './radar-chart-wrapper.component.html',
  styleUrls: ['./radar-chart-wrapper.component.css'],
})
export class RadarChartWrapperComponent implements OnChanges, AfterContentChecked {
  @Input() level;
  @Input() trainingDefinitionId: number;
  @Input() trainingInstanceStatistics: TrainingInstanceStatistics[];

  appRef;
  public numOfClusters = 5;
  public trainingInstanceIds: number[] = [];
  public cardHeight = 1500;
  public levelTitle = '';
  public readonly info =
    'The chart displays overview of trainee groups and their playing behavior. ' +
    'The small radar charts represent the groups of trainees whose playing styles were similar.';

  constructor(appRef: ApplicationRef) {
    this.appRef = appRef;
  }

  ngAfterContentChecked() {
    this.cardHeight = this.getBBox() * 3;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.trainingInstanceIds = this.trainingInstanceStatistics.map((ti) => ti.instanceId);
    this.levelTitle = this.level !== null ? '(for <i>level ' + this.level + '</i> only)' : '';
  }

  toggleView(isOpen: boolean) {
    this.appRef.tick();
  }

  clusterChange(change: any) {
    this.numOfClusters = change.target.value;
  }

  getBBox() {
    const box = document.querySelector('#radarchartSvgPlaceholder kypo-clustering-visualization') as HTMLElement | null;
    //console.log(box.getBoundingClientRect());

    if (box != null) {
      return box.getBoundingClientRect().height + 24;
    }
  }

  hideChart(item) {
    console.log(item);
    d3.select('#radarchartDiv').style('display', item[0].hide ? 'none' : 'block');
  }
}
