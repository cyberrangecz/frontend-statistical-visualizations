import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StatisticalOverviewComponent } from './statistical-overview.component';

describe('ClusteringOverviewComponent', () => {
  let component: StatisticalOverviewComponent;
  let fixture: ComponentFixture<StatisticalOverviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticalOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
