import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRandomTvSeriesComponent } from './main-random-tv-series.component';

describe('MainRandomTvSeriesComponent', () => {
  let component: MainRandomTvSeriesComponent;
  let fixture: ComponentFixture<MainRandomTvSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRandomTvSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRandomTvSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
