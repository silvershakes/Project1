import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tech1Component } from './tech1.component';

describe('Tech1Component', () => {
  let component: Tech1Component;
  let fixture: ComponentFixture<Tech1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tech1Component]
    });
    fixture = TestBed.createComponent(Tech1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
