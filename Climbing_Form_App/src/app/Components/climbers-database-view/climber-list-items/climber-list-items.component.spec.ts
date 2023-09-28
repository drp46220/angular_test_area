import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimberListItemsComponent } from './climber-list-items.component';

describe('ClimberListItemsComponent', () => {
  let component: ClimberListItemsComponent;
  let fixture: ComponentFixture<ClimberListItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClimberListItemsComponent]
    });
    fixture = TestBed.createComponent(ClimberListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
