import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClimberComponent } from './new-climber.component';

describe('NewClimberComponent', () => {
  let component: NewClimberComponent;
  let fixture: ComponentFixture<NewClimberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewClimberComponent]
    });
    fixture = TestBed.createComponent(NewClimberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
