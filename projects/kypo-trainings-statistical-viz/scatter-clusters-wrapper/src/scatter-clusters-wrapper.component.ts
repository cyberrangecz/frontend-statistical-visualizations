import { AfterContentChecked, ApplicationRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TrainingInstanceStatistics } from '@muni-kypo-crp/statistical-visualizations/internal';
import * as d3 from 'd3';

@Component({
  selector: 'kypo-scatter-clusters-wrapper',
  templateUrl: './scatter-clusters-wrapper.component.html',
  styleUrls: ['./scatter-clusters-wrapper.component.css'],
})
export class ScatterClustersWrapperComponent implements OnChanges, AfterContentChecked {
  @Input() level = '';
  @Input() trainingDefinitionId: number;
  @Input() trainingInstanceStatistics: TrainingInstanceStatistics[];

  appRef;
  public numOfClusters = 5;
  public trainingInstanceIds: number[] = [];
  public cardHeight = 150;
  public plotFeatures = 1;
  public levelTitle = '';
  public readonly info =
    'The chart shows a relation between two distinct groups of actions or behavior, helps to identify connections between them.';

  constructor(appRef: ApplicationRef) {
    this.appRef = appRef;
  }

  ngAfterContentChecked() {
    this.cardHeight = document.querySelector('kypo-clustering-visualization').getBoundingClientRect().height;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.trainingInstanceIds = this.trainingInstanceStatistics.map((ti) => ti.instanceId);
    this.levelTitle = this.level !== null ? '(for <i>level ' + this.level + '</i> only)' : '';
  }

  public onRadioChange(value: number): void {
    this.plotFeatures = value;
  }

  toggleView(isOpen: boolean) {
    this.appRef.tick();
  }

  clusterChange(change) {
    this.numOfClusters = change.target.value;
  }

  getBBox() {
    const box = document.querySelector(
      '#scatterClustersPlaceholder kypo-clustering-visualization'
    ) as HTMLElement | null;

    if (box != null) {
      return box.getBoundingClientRect().height + 24;
    }
  }

  hideChart(hide: boolean) {
    console.log('hide scatter');
  }
}
