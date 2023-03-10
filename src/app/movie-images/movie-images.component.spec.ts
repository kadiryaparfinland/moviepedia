import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieImagesComponent } from './movie-images.component';

describe('MovieImagesComponent', () => {
  let component: MovieImagesComponent;
  let fixture: ComponentFixture<MovieImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
