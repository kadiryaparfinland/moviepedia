import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastKnownMoviesComponent } from './cast-known-movies.component';

describe('CastKnownMoviesComponent', () => {
  let component: CastKnownMoviesComponent;
  let fixture: ComponentFixture<CastKnownMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastKnownMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastKnownMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
