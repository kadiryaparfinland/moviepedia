import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmoviesComponent } from './warmovies.component';

describe('WarmoviesComponent', () => {
  let component: WarmoviesComponent;
  let fixture: ComponentFixture<WarmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarmoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
