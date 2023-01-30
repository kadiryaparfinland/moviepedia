import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SciencefictionmoviesComponent } from './sciencefictionmovies.component';

describe('SciencefictionmoviesComponent', () => {
  let component: SciencefictionmoviesComponent;
  let fixture: ComponentFixture<SciencefictionmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SciencefictionmoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SciencefictionmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
