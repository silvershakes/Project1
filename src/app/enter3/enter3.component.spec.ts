import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enter3Component } from './enter3.component';

describe('Enter3Component', () => {
  let component: Enter3Component;
  let fixture: ComponentFixture<Enter3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Enter3Component]
    });
    fixture = TestBed.createComponent(Enter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
