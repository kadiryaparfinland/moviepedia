import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSeriesMainDetailsComponent } from './tv-series-main-details.component';

describe('TvSeriesMainDetailsComponent', () => {
  let component: TvSeriesMainDetailsComponent;
  let fixture: ComponentFixture<TvSeriesMainDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvSeriesMainDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvSeriesMainDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
