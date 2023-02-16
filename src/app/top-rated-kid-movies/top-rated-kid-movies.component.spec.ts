import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedKidMoviesComponent } from './top-rated-kid-movies.component';

describe('TopRatedKidMoviesComponent', () => {
  let component: TopRatedKidMoviesComponent;
  let fixture: ComponentFixture<TopRatedKidMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatedKidMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRatedKidMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
