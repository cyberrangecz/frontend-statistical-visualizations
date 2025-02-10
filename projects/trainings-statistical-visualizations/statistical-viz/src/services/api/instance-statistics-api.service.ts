import { Observable } from 'rxjs';
import { TrainingInstanceStatistics } from '@cyberrangecz-platform/statistical-visualizations/internal';

export abstract class InstanceStatisticsApiService {
  /**
   * Sends http request to retrieve all training instances
   */
  abstract getAll(definitionId: number): Observable<TrainingInstanceStatistics[]>;
}
