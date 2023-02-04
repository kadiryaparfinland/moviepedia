import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieYoutubeFragmentComponent } from './movie-youtube-fragment.component';

describe('MovieYoutubeFragmentComponent', () => {
  let component: MovieYoutubeFragmentComponent;
  let fixture: ComponentFixture<MovieYoutubeFragmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieYoutubeFragmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieYoutubeFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
