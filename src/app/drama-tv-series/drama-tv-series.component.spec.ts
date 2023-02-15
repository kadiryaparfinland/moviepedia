import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaTvSeriesComponent } from './drama-tv-series.component';

describe('DramaTvSeriesComponent', () => {
  let component: DramaTvSeriesComponent;
  let fixture: ComponentFixture<DramaTvSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DramaTvSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DramaTvSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
