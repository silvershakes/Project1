import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Politic1Component } from './politic1.component';

describe('Politic1Component', () => {
  let component: Politic1Component;
  let fixture: ComponentFixture<Politic1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Politic1Component]
    });
    fixture = TestBed.createComponent(Politic1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
