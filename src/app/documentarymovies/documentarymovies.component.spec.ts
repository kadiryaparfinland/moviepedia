import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentarymoviesComponent } from './documentarymovies.component';

describe('DocumentarymoviesComponent', () => {
  let component: DocumentarymoviesComponent;
  let fixture: ComponentFixture<DocumentarymoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentarymoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentarymoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
