import {Component, Input, OnInit} from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription, throwError, timer } from 'rxjs';
import { VisualizationData } from '../../models/visualization-data';
import { VisualizationsDataService } from '../../services/visualizations-data.service';
import { AppConfig } from '../../../app.config';

@Component({
  selector: 'kypo-statistical-visualization',
  templateUrl: './visualizations.component.html',
  styleUrls: ['./visualizations.component.css']
})
export class VisualizationsComponent implements OnInit {

  @Input() trainingDefinitionId: number;
  @Input() trainingInstanceId: number;

  visualizationData$: Observable<VisualizationData>;

  constructor(
    private visualizationDataService: VisualizationsDataService,
    private appConfig: AppConfig
  ) {}

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    const service = this.visualizationDataService.getData(this.trainingDefinitionId);
    service.subscribe((res) => {
      this.visualizationData$ = res;
    });
  }
}
