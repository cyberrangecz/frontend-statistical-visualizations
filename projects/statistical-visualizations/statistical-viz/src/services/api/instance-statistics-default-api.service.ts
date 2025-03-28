import { InstanceStatisticsApiService } from './instance-statistics-api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StatisticalVizConfig, TrainingInstanceStatistics } from '@crczp/statistical-visualizations/internal';
import { map } from 'rxjs/operators';
import { TrainingInstanceMapper } from '../mappers/training-instance-mapper';
import { TrainingInstanceStatisticsDTO } from '../../DTOs/training-instance-statistics-dto';

@Injectable()
export class InstanceStatisticsDefaultApiService extends InstanceStatisticsApiService {
    private trainingInstancesEndpoint: string;

    constructor(
        private http: HttpClient,
        config: StatisticalVizConfig,
    ) {
        super();
        this.trainingInstancesEndpoint = config.trainingServiceUrl + '/training-instances';
        if (config.trainingServiceUrl === undefined || config.trainingServiceUrl === null) {
            throw new Error(
                'StatisticalVizConfig is null or undefined. Please provide it in forRoot() method of StatisticalVisualizationModule' +
                    ' or provide own implementation of API services',
            );
        }
    }

    getAll(definitionId: number): Observable<TrainingInstanceStatistics[]> {
        return this.http
            .get<TrainingInstanceStatisticsDTO[]>(
                `${this.trainingInstancesEndpoint}/training-definitions/${definitionId}`,
                {
                    headers: this.createDefaultHeaders(),
                },
            )
            .pipe(map((response) => TrainingInstanceMapper.fromDTOs(response)));
    }

    private createDefaultHeaders() {
        return new HttpHeaders({ Accept: 'application/json' });
    }
}
