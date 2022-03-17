import {environment} from '../environments/environment';
import {StatisticalVisualizationConfig} from '../../projects/kypo-trainings-statistical-viz-lib/src/public_api';

export const CustomConfig: StatisticalVisualizationConfig = {
  trainingServiceUrl: environment.trainingServiceUrl,
  elasticSearchServiceUrl: environment.elasticSearchServiceUrl
};
