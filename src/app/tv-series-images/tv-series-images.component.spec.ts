import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSeriesImagesComponent } from './tv-series-images.component';

describe('TvSeriesImagesComponent', () => {
  let component: TvSeriesImagesComponent;
  let fixture: ComponentFixture<TvSeriesImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvSeriesImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvSeriesImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
