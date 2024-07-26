import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Politic2Component } from './politic2.component';

describe('Politic2Component', () => {
  let component: Politic2Component;
  let fixture: ComponentFixture<Politic2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Politic2Component]
    });
    fixture = TestBed.createComponent(Politic2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
