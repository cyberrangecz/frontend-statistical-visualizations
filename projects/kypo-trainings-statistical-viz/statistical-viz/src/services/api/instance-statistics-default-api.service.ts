import { InstanceStatisticsApiService } from './instance-statistics-api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StatisticalVizConfig } from '@muni-kypo-crp/statistical-visualizations/internal';
import { map } from 'rxjs/operators';
import { TrainingInstanceMapper } from '../mappers/training-instance-mapper';
import { TrainingInstanceStatisticsDTO } from '../../DTOs/training-instance-statistics-dto';
import { TrainingInstanceStatistics } from '@muni-kypo-crp/statistical-visualizations/internal';

@Injectable()
export class InstanceStatisticsDefaultApiService extends InstanceStatisticsApiService {
  private readonly trainingInstancesEndpoint = this.config.trainingServiceUrl + 'visualizations';

  constructor(private http: HttpClient, private config: StatisticalVizConfig) {
    super();
    if (this.config.trainingServiceUrl === undefined || this.config.trainingServiceUrl === null) {
      throw new Error(
        'StatisticalVizConfig is null or undefined. Please provide it in forRoot() method of StatisticalVisualizationModule' +
          ' or provide own implementation of API services'
      );
    }
  }

  getAll(definitionId: number): Observable<TrainingInstanceStatistics[]> {
    return this.http
      .get<TrainingInstanceStatisticsDTO[]>(`${this.trainingInstancesEndpoint}/training-definitions/${definitionId}`, {
        headers: this.createDefaultHeaders(),
      })
      .pipe(map((response) => TrainingInstanceMapper.fromDTOs(response)));
  }

  private createDefaultHeaders() {
    return new HttpHeaders({ Accept: 'application/json' });
  }
}
