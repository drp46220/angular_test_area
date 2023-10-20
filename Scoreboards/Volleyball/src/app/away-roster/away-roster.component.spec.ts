import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwayRosterComponent } from './away-roster.component';

describe('AwayRosterComponent', () => {
  let component: AwayRosterComponent;
  let fixture: ComponentFixture<AwayRosterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwayRosterComponent]
    });
    fixture = TestBed.createComponent(AwayRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
