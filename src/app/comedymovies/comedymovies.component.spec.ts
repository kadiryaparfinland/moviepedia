import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedymoviesComponent } from './comedymovies.component';

describe('ComedymoviesComponent', () => {
  let component: ComedymoviesComponent;
  let fixture: ComponentFixture<ComedymoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComedymoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComedymoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
