import { Observable } from 'rxjs';
import { TrainingInstanceStatistics } from '@muni-kypo-crp/statistical-visualizations/internal';

export abstract class InstanceStatisticsApiService {
  /**
   * Sends http request to retrieve all training instances
   */
  abstract getAll(definitionId: number): Observable<TrainingInstanceStatistics[]>;
}
