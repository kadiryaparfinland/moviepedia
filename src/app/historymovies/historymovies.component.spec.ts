import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorymoviesComponent } from './historymovies.component';

describe('HistorymoviesComponent', () => {
  let component: HistorymoviesComponent;
  let fixture: ComponentFixture<HistorymoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorymoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorymoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
