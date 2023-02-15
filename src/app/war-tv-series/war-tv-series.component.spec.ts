import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarTvSeriesComponent } from './war-tv-series.component';

describe('WarTvSeriesComponent', () => {
  let component: WarTvSeriesComponent;
  let fixture: ComponentFixture<WarTvSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarTvSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarTvSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
