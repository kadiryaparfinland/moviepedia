import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainrandommovieComponent } from './mainrandommovie.component';

describe('MainrandommovieComponent', () => {
  let component: MainrandommovieComponent;
  let fixture: ComponentFixture<MainrandommovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainrandommovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainrandommovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
