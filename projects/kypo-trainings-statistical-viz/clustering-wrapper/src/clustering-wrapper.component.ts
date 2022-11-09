import { AfterViewInit, Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TrainingInstanceStatistics } from '@muni-kypo-crp/statistical-visualizations/internal';

@Component({
  selector: 'kypo-viz-statistical-clustering-wrapper',
  templateUrl: './clustering-wrapper.component.html',
  styleUrls: ['./clustering-wrapper.component.css'],
})
export class ClusteringWrapperComponent implements AfterViewInit, OnInit, OnChanges {
  private readonly BOX_SIZE_PADDING = 175;
  clusteringSize = { width: 650, height: 300 }; // constants as this visualization responsivity is in a bad state
  selectedIds: number[];

  @Input() trainingInstanceStatistics: TrainingInstanceStatistics[];
  @Input() selectedLevel: number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resize();
  }

  ngOnInit(): void {
    this.selectedIds = [this.selectedLevel];
  }

  ngAfterViewInit(): void {
    this.resize();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['trainingInstanceStatistics'].isFirstChange()) {
      this.selectedIds = this.trainingInstanceStatistics.map((statistics) => statistics.instanceId);
    }
  }

  private resize() {
    this.clusteringSize = {
      width: document.getElementById('combinedDiv').getBoundingClientRect().width - this.BOX_SIZE_PADDING,
      height: this.clusteringSize.height,
    };
  }
}
