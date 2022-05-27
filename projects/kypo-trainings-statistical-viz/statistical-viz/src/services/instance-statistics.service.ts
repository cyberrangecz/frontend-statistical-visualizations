import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TrainingInstanceStatistics } from '@muni-kypo-crp/statistical-visualizations/internal';

@Injectable()
export abstract class InstanceStatisticsService {
  protected trainingInstancesSubject$: BehaviorSubject<TrainingInstanceStatistics[]> = new BehaviorSubject([]);
  trainingInstance$: Observable<TrainingInstanceStatistics[]> = this.trainingInstancesSubject$.asObservable();

  /**
   * Retrieves all training instances for visualization
   */
  abstract getAll(definitionId: number): Observable<TrainingInstanceStatistics[]>;
}
