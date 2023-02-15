import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTvSeriesComponent } from './popular-tv-series.component';

describe('PopularTvSeriesComponent', () => {
  let component: PopularTvSeriesComponent;
  let fixture: ComponentFixture<PopularTvSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularTvSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularTvSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
