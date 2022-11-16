import { AfterContentChecked, ApplicationRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TrainingInstanceStatistics } from '@muni-kypo-crp/statistical-visualizations/internal';
import * as d3 from 'd3';

@Component({
  selector: 'kypo-scatter-clusters-wrapper',
  templateUrl: './scatter-clusters-wrapper.component.html',
  styleUrls: ['./scatter-clusters-wrapper.component.css'],
})
export class ScatterClustersWrapperComponent implements OnChanges, AfterContentChecked {
  @Input() level;
  @Input() trainingDefinitionId: number;
  @Input() trainingInstanceStatistics: TrainingInstanceStatistics[];

  appRef;
  public numOfClusters = 5;
  public trainingInstanceIds: number[] = [];
  public cardHeight = 150;
  public plotFeatures = 1;
  public unavailableFeatures = new Set();
  public levelTitle = '';
  private checkedFeatures = new Set();
  private initialFeature = 1;

  public readonly info =
    'The chart shows a relation between two distinct groups of actions or behavior, helps to identify connections between them.';

  constructor(appRef: ApplicationRef) {
    this.appRef = appRef;
  }

  ngAfterContentChecked() {
    this.cardHeight = document.querySelector('kypo-clustering-visualization').getBoundingClientRect().height;
    this.checkedFeatures.add(this.plotFeatures);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initialFeatureCheck();
    this.trainingInstanceIds = this.trainingInstanceStatistics.map((ti) => ti.instanceId);
    this.levelTitle = this.level !== null ? '(for <i>level ' + this.level + '</i> only)' : '';
  }

  initialFeatureCheck() {
    if (this.checkedFeatures.size !== 2) {
      if (!this.checkedFeatures.has(0)) {
        this.plotFeatures = 0;
      } else if (!this.checkedFeatures.has(1)) {
        this.plotFeatures = 1;
      }
    } else {
      this.plotFeatures = this.initialFeature;
    }
    console.log('check');
    console.log(this.checkedFeatures);
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
   * In this visualization, we first need to make sure that for both feature sets, the chart doesn't show anything.
   * Only then we can hide the card. Therefore, we first switch both views and then hide one or both, according to
   * their state.
   * @param item tells if we should hide the current view and what feature it is
   */
  hideChart(item) {
    if (item.hide && !this.unavailableFeatures.has(item.features)) {
      this.unavailableFeatures.add(item.features);
    }
    console.log('hide');
    console.log(item);
    console.log(this.unavailableFeatures);
    /*console.log(item);
    console.log(this.unavailableFeatures);
    console.log(this.unavailableFeatures.has(this.plotFeatures))
    if (item.hide && !this.unavailableFeatures.has(item.features)) {
      this.unavailableFeatures.add(item.features);
      this.plotFeatures = item.features === 0 ? 1 : 0;
    } else if (!item.hide) {
      this.unavailableFeatures.delete(item.features);
    }
    d3.select('#scatterClusterDiv').style('display', this.unavailableFeatures.size === 2 ? 'none' : 'block');*/
  }
}
