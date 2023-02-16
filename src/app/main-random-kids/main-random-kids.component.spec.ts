import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRandomKidsComponent } from './main-random-kids.component';

describe('MainRandomKidsComponent', () => {
  let component: MainRandomKidsComponent;
  let fixture: ComponentFixture<MainRandomKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRandomKidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRandomKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
