import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiversComponent } from './waivers.component';

describe('WaiversComponent', () => {
  let component: WaiversComponent;
  let fixture: ComponentFixture<WaiversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaiversComponent]
    });
    fixture = TestBed.createComponent(WaiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
