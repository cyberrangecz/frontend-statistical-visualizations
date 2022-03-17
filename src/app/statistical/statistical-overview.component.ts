import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {element} from "protractor";

@Component({
  selector: 'app-statistical-overview',
  templateUrl: './statistical-overview.component.html',
  styleUrls: ['./statistical-overview.component.css']
})
export class StatisticalOverviewComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  trainingDefinitionId: number = 1;
  trainingInstanceId: number = 1;

  constructor() { }

  ngOnInit() {
  }
}
