import { Component, OnInit } from '@angular/core';
import { Agenda, AgendaContainer } from '@sentinel/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  agendaContainers: AgendaContainer[];

  ngOnInit(): void {
    const containers = [new Agenda('statistical-page viz', 'statistical-page')];
    this.agendaContainers = [new AgendaContainer('Visualizations', containers)];
  }
}
