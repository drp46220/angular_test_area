import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRosterComponent } from './home-roster.component';

describe('HomeRosterComponent', () => {
  let component: HomeRosterComponent;
  let fixture: ComponentFixture<HomeRosterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeRosterComponent]
    });
    fixture = TestBed.createComponent(HomeRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
