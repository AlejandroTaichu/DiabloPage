import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LilithComponent } from './lilith.component';

describe('LilithComponent', () => {
  let component: LilithComponent;
  let fixture: ComponentFixture<LilithComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LilithComponent]
    });
    fixture = TestBed.createComponent(LilithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
