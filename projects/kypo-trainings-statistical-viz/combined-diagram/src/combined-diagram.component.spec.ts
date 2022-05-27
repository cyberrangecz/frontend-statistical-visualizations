import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedDiagramComponent } from './combined-diagram.component';

describe('CombinedDiagramComponent', () => {
  let component: CombinedDiagramComponent;
  let fixture: ComponentFixture<CombinedDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CombinedDiagramComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinedDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
