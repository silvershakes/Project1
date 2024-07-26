import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Life1Component } from './life1.component';

describe('Life1Component', () => {
  let component: Life1Component;
  let fixture: ComponentFixture<Life1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Life1Component]
    });
    fixture = TestBed.createComponent(Life1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
