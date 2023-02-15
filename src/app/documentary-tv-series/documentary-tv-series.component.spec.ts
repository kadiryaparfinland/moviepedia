import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentaryTvSeriesComponent } from './documentary-tv-series.component';

describe('DocumentaryTvSeriesComponent', () => {
  let component: DocumentaryTvSeriesComponent;
  let fixture: ComponentFixture<DocumentaryTvSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentaryTvSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentaryTvSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
