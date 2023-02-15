import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyTvSeriesComponent } from './family-tv-series.component';

describe('FamilyTvSeriesComponent', () => {
  let component: FamilyTvSeriesComponent;
  let fixture: ComponentFixture<FamilyTvSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyTvSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyTvSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
