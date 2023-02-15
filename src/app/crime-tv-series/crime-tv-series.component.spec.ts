import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeTvSeriesComponent } from './crime-tv-series.component';

describe('CrimeTvSeriesComponent', () => {
  let component: CrimeTvSeriesComponent;
  let fixture: ComponentFixture<CrimeTvSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimeTvSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrimeTvSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
