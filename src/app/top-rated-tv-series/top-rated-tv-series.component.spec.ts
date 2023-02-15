import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedTvSeriesComponent } from './top-rated-tv-series.component';

describe('TopRatedTvSeriesComponent', () => {
  let component: TopRatedTvSeriesComponent;
  let fixture: ComponentFixture<TopRatedTvSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatedTvSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRatedTvSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
