import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spiritual1Component } from './spiritual1.component';

describe('Spiritual1Component', () => {
  let component: Spiritual1Component;
  let fixture: ComponentFixture<Spiritual1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Spiritual1Component]
    });
    fixture = TestBed.createComponent(Spiritual1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
