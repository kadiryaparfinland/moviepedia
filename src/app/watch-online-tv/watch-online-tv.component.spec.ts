import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchOnlineTvComponent } from './watch-online-tv.component';

describe('WatchOnlineTvComponent', () => {
  let component: WatchOnlineTvComponent;
  let fixture: ComponentFixture<WatchOnlineTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchOnlineTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchOnlineTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
