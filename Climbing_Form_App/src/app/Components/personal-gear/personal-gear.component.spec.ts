import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalGearComponent } from './personal-gear.component';

describe('PersonalGearComponent', () => {
  let component: PersonalGearComponent;
  let fixture: ComponentFixture<PersonalGearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalGearComponent]
    });
    fixture = TestBed.createComponent(PersonalGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
