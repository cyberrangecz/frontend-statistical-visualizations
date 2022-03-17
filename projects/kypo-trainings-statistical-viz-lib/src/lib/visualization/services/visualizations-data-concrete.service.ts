import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { VisualizationDataApi } from '../api/visualization-data-api.service';
import { VisualizationData } from '../models/visualization-data';
import { VisualizationsDataService } from './visualizations-data.service';
import {StatisticalVisualizationDataMapper} from "../mappers/statistical-visualization-data-mapper";

@Injectable()
export class VisualizationsDataConcreteService extends VisualizationsDataService{

    private readonly messageBase = 'VisualizationsDataService not connect to API: ';

    constructor(private visualizationApi: VisualizationDataApi) {
      super();
    }

    getData(trainingInstanceId: number): Observable<VisualizationData> {
        return this.visualizationApi.getVisualizationData(trainingInstanceId).pipe(
            map((data: any) => StatisticalVisualizationDataMapper.fromDTO(data)),
            catchError((error) => {
                return throwError(this.messageBase + error.message);
            })
        );

    }
}
