import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSeriesYoutubeTrailerComponent } from './tv-series-youtube-trailer.component';

describe('TvSeriesYoutubeTrailerComponent', () => {
  let component: TvSeriesYoutubeTrailerComponent;
  let fixture: ComponentFixture<TvSeriesYoutubeTrailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvSeriesYoutubeTrailerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvSeriesYoutubeTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
