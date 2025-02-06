import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import * as d3 from 'd3';
import { IFilter, TrainingInstanceStatistics } from '@cyberrangecz-platform/statistical-visualizations/internal';

@Component({
  selector: 'kypo-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit, OnChanges {
  @Input() initialTrainingInstance: number;
  @Input() trainingInstances: TrainingInstanceStatistics[];
  // Specifies an event emitter which communicates the onclick event
  // to the parent component and enables to define an arbitrary function
  // - to be called to handle onclick event - outside this component
  @Output() detailView: EventEmitter<number> = new EventEmitter();
  @Output() filterChange: EventEmitter<IFilter[]> = new EventEmitter();

  @HostListener('window:resize') onResizeEvent() {
    this.onResize();
  }

  @HostListener('window:orientationchange') onOrientationChangeEvent() {
    this.onOrientationChange();
  }

  // Contains the list of training instances and
  // the current state of the corresponding checkboxes
  public checkboxes: IFilter[] = [];
  // Contains information about the trainings which is
  // used to create the middle columns of the filter panel
  public tableData: string[] = [];

  /**
   * While the component is being created:
   * tests the input parameters,
   * sets the size of the component based on the actual configuration
   * and calls 'getInputData' to get the information about the training
   * definition and the events that occured during the training instances
   */
  ngOnInit(): void {
    this.setComponentSize();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('trainingInstances' in changes && !changes['trainingInstances'].isFirstChange()) {
      this.initCheckboxes();
      this.initTable();
    }
  }

  /**
   * Makes the visualization responsive to the actual screen size
   * If the window is resized, the size of the panel is recalculated
   */
  public onResize(): void {
    this.setComponentSize();
  }

  /**
   * Makes the visualization responsive to the actual screen size
   * If the window orientation is changed, the same actions are performed
   * than in case of screen size change
   */
  public onOrientationChange(): void {
    this.setComponentSize();
  }

  /**
   * Processes the action when a checkbox is clicked
   * Inverts the value of the checkbox and updates the
   * charts based on the current settings of the filter panel
   * Variable 'nothingIsCheckedMethod' marks how to solve the
   * problem of no checked checkboxes: 'showNoData' displays
   * a message in case, that no checkbox is checked; 'disableCheckbox'
   * specifies that the last checkbox should be blocked, so at least one
   * checkbox is checked all the time
   * @param item - marks the checkbox that has been checked
   */
  public onChange(item: IFilter): void {
    item.checked = !item.checked;
    // Finds the actually checked checkboxes
    const checkedFilters: IFilter[] = this.checkboxes.filter((checkbox: IFilter) => checkbox.checked);
    this.filterChangeHandler();
  }

  /**
   * Processes the click events on chart icons
   * Emits instance id which enables to communicate the
   * click event to the parent component
   * @param event - marks Ifilter object which contains the instance id
   */
  public onClick(event: IFilter): void {
    this.detailView.emit(event.instanceId);
  }

  /**
   * If no checkbox is checked, calls the method 'switchBetweenChartsAndNoData' to show the
   * 'no data' message. Otherwise, hides the message and updates the charts
   * @private
   */
  private filterChangeHandler(): void {
    const checkedFilters: IFilter[] = this.checkboxes.filter((checkbox: IFilter) => checkbox.checked);
    if (checkedFilters.length === 0) {
      this.switchBetweenChartsAndNoData('none', 'block');
    } else {
      this.switchBetweenChartsAndNoData('inline-block', 'none');
      this.filterChange.emit(this.checkboxes);
    }
  }

  /**
   * Sets the components size based on the current
   * configuration settings and screen size
   */
  private setComponentSize(): void {
    if (window.innerWidth >= 1024) {
      d3.select('#filterPlaceholder').style('width', 1024).style('height', 1024);
    } else {
      d3.select('#filterPlaceholder').style('width', 1024).style('height', 1024);
    }
  }

  /**
   * Initializes the data which represents the checkboxes
   * Each training instance is represented by a pair of information:
   * the first component contains the title of the training, while
   * the second marks whether the corresponding checkbox is checked
   */
  private initCheckboxes(): void {
    this.trainingInstances.forEach((training) => {
      this.checkboxes.push({
        training: 'Training ' + training.instanceId,
        checked: training.instanceId === this.initialTrainingInstance,
        disabled: false,
        instanceId: training.instanceId,
      });
    });
    this.filterChangeHandler();
  }

  /**
   * Initializes the data required to create the filter panel
   * For each training instance contains its title, the training
   * date, its duration and the number of participants
   */
  private initTable(): void {
    this.tableData = [];

    this.trainingInstances.forEach((instance) => {
      //this.tableData.push(`${instance.instanceId}`);
      this.tableData.push(instance.title);
      this.tableData.push(instance.date);
      this.tableData.push(this.hoursMinutesSeconds(instance.duration / 1000));
      this.tableData.push(String(instance.participants.length));
    });
  }

  /**
   * Sets the 'display' attribute of charts and the 'no data' panel
   * Enables to show/hide the diagrams based on the actual settings of filters
   * @param chartStyle - marks whether the charts should be visible
   * @param noDataStyle - marks whether the 'no data' text should be visible
   */
  private switchBetweenChartsAndNoData(chartStyle: string, noDataStyle: string): void {
    d3.select('#noDataCard').style('display', noDataStyle);
    d3.select('#barchartPlaceholder').style('display', chartStyle);
    d3.select('#bubblechartPlaceholder').style('display', chartStyle);
    d3.select('#scatterplotPlaceholder').style('display', chartStyle);
    d3.select('#combinedDiagramPlaceholder').style('display', chartStyle);
    d3.select('#clusteringPlaceholder').style('display', chartStyle);
    d3.select('#scatterClustersPlaceholder').style('display', chartStyle);
    d3.select('#radarchartPlaceholder').style('display', chartStyle);
  }

  private hoursMinutesSeconds(timestamp): string {
    const hours = Math.floor(timestamp / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((timestamp % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(timestamp % 60)
      .toString()
      .padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
}
