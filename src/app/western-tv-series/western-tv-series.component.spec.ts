import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WesternTvSeriesComponent } from './western-tv-series.component';

describe('WesternTvSeriesComponent', () => {
  let component: WesternTvSeriesComponent;
  let fixture: ComponentFixture<WesternTvSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WesternTvSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WesternTvSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
