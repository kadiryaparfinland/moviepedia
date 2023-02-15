import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionTvSeriesComponent } from './action-tv-series.component';

describe('ActionTvSeriesComponent', () => {
  let component: ActionTvSeriesComponent;
  let fixture: ComponentFixture<ActionTvSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionTvSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionTvSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
