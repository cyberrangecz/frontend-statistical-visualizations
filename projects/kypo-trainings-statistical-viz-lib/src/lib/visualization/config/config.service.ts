import {Injectable} from '@angular/core';
import {StatisticalVisualizationConfig} from "./kypo-trainings-statistical-viz-lib";

@Injectable()
export class ConfigService {
  private readonly _config: StatisticalVisualizationConfig;
  private _trainingDefinitionId: number;
  private _trainingInstanceId: number;


  get trainingDefinitionId(): number {
    return this._trainingDefinitionId;
  }

  set trainingDefinitionId(value: number) {
    this._trainingDefinitionId = value;
  }

  get trainingInstanceId(): number {
    return this._trainingInstanceId;
  }

  set trainingInstanceId(value: number) {
    this._trainingInstanceId = value;
  }

  get config(): StatisticalVisualizationConfig {
    return this._config;
  }

  constructor(config: StatisticalVisualizationConfig) {
    this._config = config;
  }
}
