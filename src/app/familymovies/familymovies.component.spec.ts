import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilymoviesComponent } from './familymovies.component';

describe('FamilymoviesComponent', () => {
  let component: FamilymoviesComponent;
  let fixture: ComponentFixture<FamilymoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilymoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilymoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
