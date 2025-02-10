import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterClustersWrapperComponent } from './scatter-clusters-wrapper.component';

describe('ScatterClustersWrapperComponent', () => {
  let component: ScatterClustersWrapperComponent;
  let fixture: ComponentFixture<ScatterClustersWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScatterClustersWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScatterClustersWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
