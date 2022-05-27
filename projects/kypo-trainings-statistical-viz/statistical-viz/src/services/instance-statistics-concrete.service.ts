import { InstanceStatisticsService } from './instance-statistics.service';
import { Observable, tap } from 'rxjs';
import { TrainingInstanceStatistics } from '@muni-kypo-crp/statistical-visualizations/internal';
import { InstanceStatisticsApiService } from './api/instance-statistics-api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class InstanceStatisticsConcreteService extends InstanceStatisticsService {
  constructor(private api: InstanceStatisticsApiService) {
    super();
    // this.getAll().pipe(take(1)).subscribe();
  }

  getAll(definitionId: number): Observable<TrainingInstanceStatistics[]> {
    return this.api.getAll(definitionId).pipe(
      tap(
        (instancesInfo) => {
          this.trainingInstancesSubject$.next(instancesInfo);
        },
        (err) => {
          // an error occurred when obtaining data
        }
      )
    );
  }
}
