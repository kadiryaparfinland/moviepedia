import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedyTvSeriesComponent } from './comedy-tv-series.component';

describe('ComedyTvSeriesComponent', () => {
  let component: ComedyTvSeriesComponent;
  let fixture: ComponentFixture<ComedyTvSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComedyTvSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComedyTvSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
