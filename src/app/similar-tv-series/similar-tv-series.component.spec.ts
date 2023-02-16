import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarTvSeriesComponent } from './similar-tv-series.component';

describe('SimilarTvSeriesComponent', () => {
  let component: SimilarTvSeriesComponent;
  let fixture: ComponentFixture<SimilarTvSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarTvSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarTvSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
