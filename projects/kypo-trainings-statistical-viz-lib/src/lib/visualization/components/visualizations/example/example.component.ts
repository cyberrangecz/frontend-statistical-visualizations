import { AfterViewInit, Component, Input, OnChanges, ViewEncapsulation,} from '@angular/core';
import { D3, D3Service } from '@muni-kypo-crp/d3-service';
import { AppConfig } from '../../../../app.config';
import { ConfigService } from '../../../config/config.service';
import { Subscription } from 'rxjs';
import {VisualizationData} from "../../../models/visualization-data";

@Component({
  selector: 'kypo-viz-statistical-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnChanges, AfterViewInit {

  @Input() visualizationData: VisualizationData;

  private readonly d3: D3;
  private svg: any;

  constructor(
    d3Service: D3Service,
    private configService: ConfigService,
    private appConfig: AppConfig,
  ) {
    this.d3 = d3Service.getD3();
  }

  ngOnChanges(): void {
    console.log(this.visualizationData);
  }

  ngAfterViewInit(): void  {
  }

  drawChart(): void {
  }

  onResize() {
    this.drawChart();
  }
}
