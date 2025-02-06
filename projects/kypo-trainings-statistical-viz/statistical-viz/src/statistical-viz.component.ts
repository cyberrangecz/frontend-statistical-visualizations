import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { IFilter, TrainingInstanceStatistics } from '@cyberrangecz-platform/statistical-visualizations/internal';
import { InstanceStatisticsService } from './services/instance-statistics.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'kypo-statistical-visualization',
  templateUrl: './statistical-viz.component.html',
  styleUrls: ['./statistical-viz.component.css'],
})
export class StatisticalVizComponent implements OnInit {
  // Determines what visualizations are displayed in the grid in which order.
  // The order is important because the order of the visualizations is determined by the order of the names in the object.
  @Input() visualizationGrid: string[];
  @Input() trainingDefinitionId: number;
  // instance id that should be selected in filters
  @Input() trainingInstanceId: number;
  @Output() openDetailView: EventEmitter<number> = new EventEmitter();

  trainingInstanceStatistics$: Observable<TrainingInstanceStatistics[]>;
  filteredTrainingInstanceStatistics$: Observable<TrainingInstanceStatistics[]>;

  highlightedTrainingInstanceSubject$: BehaviorSubject<number[]> = new BehaviorSubject(null);
  highlightedTrainingInstance$: Observable<number[]> = this.highlightedTrainingInstanceSubject$.asObservable();

  selectedLevelSubject$: BehaviorSubject<number> = new BehaviorSubject(null);
  selectedLevel$: Observable<number> = this.selectedLevelSubject$.asObservable();

  highlightedParticipantsSubject$: BehaviorSubject<number[]> = new BehaviorSubject(null);
  highlightedParticipants$: Observable<number[]> = this.highlightedParticipantsSubject$.asObservable();

  filters: IFilter[] = [];

  constructor(private instanceStatisticsService: InstanceStatisticsService) {}

  ngOnInit() {
    this.loadData();
  }

  filterChange(filters: IFilter[]) {
    this.filters = filters;
    this.filteredTrainingInstanceStatistics$ = this.trainingInstanceStatistics$.pipe(
      map((trainingInstanceStatistics) =>
        trainingInstanceStatistics.filter((statistics) =>
          this.filters.some((filter) => filter.instanceId == statistics.instanceId && filter.checked),
        ),
      ),
    );
  }

  highlightChange(instanceId: number[]): void {
    this.highlightedTrainingInstanceSubject$.next(instanceId);
  }

  highlightParticipants(participantId: number[]): void {
    this.highlightedParticipantsSubject$.next(participantId);
  }

  selectedLevel(levelId: number): void {
    this.selectedLevelSubject$.next(levelId);
  }

  detailView(instanceId: number): void {
    this.openDetailView.emit(instanceId);
  }

  private loadData() {
    this.trainingInstanceStatistics$ = this.instanceStatisticsService.trainingInstance$;
    this.filteredTrainingInstanceStatistics$ = this.trainingInstanceStatistics$;
    this.instanceStatisticsService.getAll(this.trainingDefinitionId).pipe(take(1)).subscribe();
  }
}
