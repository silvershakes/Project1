import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enter1Component } from './enter1.component';

describe('Enter1Component', () => {
  let component: Enter1Component;
  let fixture: ComponentFixture<Enter1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Enter1Component]
    });
    fixture = TestBed.createComponent(Enter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
