import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelayComponent } from './belay.component';

describe('BelayComponent', () => {
  let component: BelayComponent;
  let fixture: ComponentFixture<BelayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BelayComponent]
    });
    fixture = TestBed.createComponent(BelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
