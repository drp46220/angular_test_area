import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbersDatabaseViewComponent } from './climbers-database-view.component';

describe('ClimbersDatabaseViewComponent', () => {
  let component: ClimbersDatabaseViewComponent;
  let fixture: ComponentFixture<ClimbersDatabaseViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClimbersDatabaseViewComponent]
    });
    fixture = TestBed.createComponent(ClimbersDatabaseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
