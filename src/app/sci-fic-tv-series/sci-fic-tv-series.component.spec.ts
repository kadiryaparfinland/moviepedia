import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SciFicTvSeriesComponent } from './sci-fic-tv-series.component';

describe('SciFicTvSeriesComponent', () => {
  let component: SciFicTvSeriesComponent;
  let fixture: ComponentFixture<SciFicTvSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SciFicTvSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SciFicTvSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
