import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimemoviesComponent } from './crimemovies.component';

describe('CrimemoviesComponent', () => {
  let component: CrimemoviesComponent;
  let fixture: ComponentFixture<CrimemoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimemoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrimemoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
