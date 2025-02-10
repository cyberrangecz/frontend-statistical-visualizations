import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarChartWrapperComponent } from './radar-chart-wrapper.component';

describe('RadarChartWrapperComponent', () => {
  let component: RadarChartWrapperComponent;
  let fixture: ComponentFixture<RadarChartWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadarChartWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RadarChartWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
