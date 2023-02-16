import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSeriesCastComponent } from './tv-series-cast.component';

describe('TvSeriesCastComponent', () => {
  let component: TvSeriesCastComponent;
  let fixture: ComponentFixture<TvSeriesCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvSeriesCastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvSeriesCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
