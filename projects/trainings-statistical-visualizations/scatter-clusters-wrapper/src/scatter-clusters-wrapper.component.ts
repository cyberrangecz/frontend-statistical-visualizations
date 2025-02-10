import {
  AfterContentChecked,
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { TrainingInstanceStatistics } from '@cyberrangecz-platform/statistical-visualizations/internal';
import * as d3 from 'd3';

@Component({
  selector: 'crczp-scatter-clusters-wrapper',
  templateUrl: './scatter-clusters-wrapper.component.html',
  styleUrls: ['./scatter-clusters-wrapper.component.css'],
})
export class ScatterClustersWrapperComponent implements OnChanges, AfterContentChecked {
  @Input() level;
  @Input() trainingDefinitionId: number;
  @Input() trainingInstanceStatistics: TrainingInstanceStatistics[];

  readonly appRef;
  public numOfClusters = 5;
  public trainingInstanceIds: number[] = [];
  public cardHeight = 150;
  public plotFeatures = 1;
  public levelTitle = '';
  public readonly info =
    'The chart shows a relation between two distinct groups of actions or behavior, helps to identify connections between them.';

  constructor(appRef: ApplicationRef, changeDetectorRef: ChangeDetectorRef) {
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

  /**
   * In this visualization, we first need to make sure the chart does show something. If not, we can hide it.
   * @param items is an array of views that were checked for information, so that we know if we should hide it or not
   */
  hideChart(items: { hide: boolean; feature: any }[]) {
    const feature = this.plotFeatures,
      missingFeatures = items.filter((value) => value.hide).map((val) => val.feature);

    // completely hide line chart for the missing view
    d3.select('#scatterClusterDiv .clustering-feature-' + feature + ' kypo-viz-clustering-line-chart').style(
      'display',
      missingFeatures.includes(feature) ? 'none' : 'block',
    );

    // change styling of main plot to ensure the chart div does not interfere with other elements
    d3.select('#scatterClusterDiv .clustering-feature-' + feature + ' kypo-viz-clustering-scatter-plot')
      .style('opacity', missingFeatures.includes(feature) ? '0' : '1')
      .style('pointer-events', missingFeatures.includes(feature) ? 'none' : 'initial');

    // if only one feature is available, shiw a message for the other
    d3.select('#scatterClusterDiv .cluster-no-data-message').style(
      'display',
      missingFeatures.includes(feature) ? 'block' : 'none',
    );
  }
}
