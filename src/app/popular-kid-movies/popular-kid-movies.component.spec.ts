import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularKidMoviesComponent } from './popular-kid-movies.component';

describe('PopularKidMoviesComponent', () => {
  let component: PopularKidMoviesComponent;
  let fixture: ComponentFixture<PopularKidMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularKidMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularKidMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
