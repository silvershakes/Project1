import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sport1Component } from './sport1.component';

describe('Sport1Component', () => {
  let component: Sport1Component;
  let fixture: ComponentFixture<Sport1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sport1Component]
    });
    fixture = TestBed.createComponent(Sport1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
