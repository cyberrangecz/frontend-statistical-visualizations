import { Injectable } from '@angular/core';
import { StatisticalVizConfig } from '../model/statistical-viz-config';

/**
 * Configuration service holding state of the provided config
 */
@Injectable()
export class InstanceConfigService {
    /**
     * Config provided by client
     */
    config: StatisticalVizConfig;

    constructor(config: StatisticalVizConfig) {
        this.config = config;
    }
}
